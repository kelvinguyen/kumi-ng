import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Rental } from "./rental.model";

@Injectable()
export class RentalService{
    private rentals: Rental[] = [
        {
          id : "1",
          title: "Central Apartment",
          city: "New York York",
          street: "Time Square",
          category: "apartment",
          image: "http://via.placeholder.com/350x250",
          bedroom: 3,
          description: "very nice apartment",
          dailyRate: 34,
          shared: false,
          createdAt: "24/12/2017"
        },
        {
          id : "2",
          title: "Central Apartment",
          city: "New York",
          street: "Time Square",
          category: "apartment",
          image: "http://via.placeholder.com/350x250",
          bedroom: 3,
          description: "very nice apartment",
          dailyRate: 34,
          shared: false,
          createdAt: "24/12/2017"
        },
        {
          id : "3",
          title: "Central Apartment",
          city: "New York",
          street: "Time Square",
          category: "apartment",
          image: "http://via.placeholder.com/350x250",
          bedroom: 3,
          description: "very nice apartment",
          dailyRate: 34,
          shared: false,
          createdAt: "24/12/2017"
        },
        {
          id : "4",
          title: "Central Apartment",
          city: "New York",
          street: "Time Square",
          category: "apartment",
          image: "http://via.placeholder.com/350x250",
          bedroom: 3,
          description: "very nice apartment",
          dailyRate: 34,
          shared: false,
          createdAt: "24/12/2017"
        }
      ];

      public getRental(): Observable<Rental[]>{
          const observableObject:Observable<Rental[]> = new Observable((observer) =>{
                setTimeout(() => {
                    observer.next(this.rentals);
                }, 1000);

                setTimeout(() => {
                    observer.error("My error");
                }, 2000);

                setTimeout(() => {
                    observer.complete();
                }, 3000);
          });
          return observableObject;
      }

      // api
      public getRentalById(rentalId:string){
          return new Observable<Rental>((observer) => {
               
                setTimeout(() => {
                    const foundRental = this.rentals.find((rental) => {
                            return rental.id == rentalId ;
                    });
                    observer.next(foundRental)
                }, 500);

                
          });
      }
}