import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcceuilManagementComponent } from './acceuil-management/acceuil-management.component';
import { AcceuilRoutingModule } from './acceuil-management/offres-routing.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { OrderListModule } from 'primeng/orderlist';
import { PickListModule } from 'primeng/picklist';
import { RatingModule } from 'primeng/rating';



@NgModule({
  declarations: [
    AcceuilManagementComponent
  ],
  imports: [
    CommonModule,
    AcceuilRoutingModule,
    FormsModule,
    DataViewModule,
    PickListModule,
    OrderListModule,
    InputTextModule,
    DropdownModule,
    RatingModule,
    ButtonModule
  ],
  exports: [AcceuilManagementComponent]
})
export class AcceuilModule { }
