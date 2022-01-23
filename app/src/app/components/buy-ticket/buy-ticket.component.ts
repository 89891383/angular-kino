import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css'],
})
export class BuyTicketComponent implements OnInit {
  faArrowLeft = faArrowLeft;

  constructor() {}

  ngOnInit(): void {}

  buyTicket(): void {
    console.log('bangla!');
  }
}
