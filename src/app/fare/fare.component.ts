import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FareWithID, Fare, FareDataService } from '../fare-data.service'

@Component({
  selector: 'app-fare',
  templateUrl: './fare.component.html',
  styleUrls: ['./fare.component.css']
})
export class FareComponent implements OnInit {

  fareInput: number;
  fareItem: Array<FareWithID> = [];

  @Output() setFare = new EventEmitter();

  constructor(private fareDataService: FareDataService) { }

  openModal(){
    document.querySelector('.fare-modal').classList.remove('closed');
    document.querySelector('.modal-bg').classList.remove('closed');
  }

  closeAndSave(id, fareInput){
    this.setFare.emit({newFare: this.fareInput});
    
    document.querySelector('.fare-modal').classList.add('closed');
    document.querySelector('.modal-bg').classList.add('closed');

    this.fareDataService
      .update(id, { fareInput })
      .then(() =>{
        const updateFare = this.fareItem.find((fare) => fare.id === id);
        this.fareItem = [...this.fareItem.filter((fare) => fare.id != id), Object.assign({}, updateFare, { fareInput })]
      })
  }
  
  ngOnInit() {

    this.fareDataService
    .getAll()
    .then((fare: Array<FareWithID>) => {
      this.fareItem = fare;
      this.fareInput = Number(this.fareItem[0].fareInput);
    }).catch(()=>{
        let fareInput = this.fareInput;
        fareInput = 0;
        const fare: Fare = {
          fareInput
        }
        this.fareDataService
        .add(fare)
        .then((id) =>{
          this.fareItem = [...this.fareItem, Object.assign({}, fare, { id })];
        });
    });
  }
}
