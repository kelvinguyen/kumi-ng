import { Component, OnInit } from '@angular/core';
import { RentalService } from '../share/rental.service';
import { Observable } from 'rxjs';
import { Rental } from '../share/rental.model';

@Component({
  selector: 'kumi-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
  rentals: Rental[] = [];
  constructor(private rentalService:RentalService) { }

  ngOnInit() {
    const rentalObserver: Observable<Rental[]> = this.rentalService.getRental();
    rentalObserver.subscribe(
      (data) => { 
        this.rentals = data;
        
      },
      (error) => {

      },
      () => {

      }
    );
  }

}
