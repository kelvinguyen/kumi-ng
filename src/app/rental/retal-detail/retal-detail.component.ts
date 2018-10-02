import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Rental } from "../share/rental.model";
import { RentalService } from '../share/rental.service';

@Component({
  selector: 'kumi-retal-detail',
  templateUrl: './retal-detail.component.html',
  styleUrls: ['./retal-detail.component.scss']
})
export class RetalDetailComponent implements OnInit {
  currentId: string;
  currentRental: Rental;
  constructor(private route:ActivatedRoute, private rentalService: RentalService) { }

  ngOnInit() {
    
    this.route.params.subscribe((params)=>{
        this.currentId = params["rentalId"];
        this.getRental(this.currentId);
    });
  }

  public getRental(rentalId:string) {

    const observableObject = this.rentalService.getRentalById(rentalId);
    observableObject.subscribe(
      (rental:Rental) =>{ this.currentRental = rental}
    );
  }

}
