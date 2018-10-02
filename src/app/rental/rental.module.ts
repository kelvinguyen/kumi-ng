import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes,RouterModule } from '@angular/router';

import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';

import { RentalService } from "./share/rental.service";
import { RetalDetailComponent } from './retal-detail/retal-detail.component';

const routes: Routes = [
    {
        path: 'rentals', 
        component: RentalComponent,
        children:[
            {path: "", component: RentalListComponent},
            {path: ":rentalId", component: RetalDetailComponent}
        ]     
    },
  ]

@NgModule({
   declarations:[
        RentalComponent,
        RentalListComponent,
        RentalListItemComponent,
        RetalDetailComponent
   ],
   imports: [
        CommonModule,
        RouterModule.forChild(routes)
   ],
   providers:[
       RentalService
   ] 
})
export class RentalModule{}