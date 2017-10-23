import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fare',
  templateUrl: './fare.component.html',
  styleUrls: ['./fare.component.css']
})
export class FareComponent implements OnInit {

  public fare: number = null;

  constructor() { }

  openModal(){
    document.querySelector('.fare-modal').classList.remove('closed');
    document.querySelector('.modal-bg').classList.remove('closed');
  }

  closeModal(){
    document.querySelector('.fare-modal').classList.add('closed');
    document.querySelector('.modal-bg').classList.add('closed');
  }

  ngOnInit() {
  }


}
