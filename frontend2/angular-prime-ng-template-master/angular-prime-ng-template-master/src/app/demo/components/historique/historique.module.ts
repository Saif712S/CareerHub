import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriqueCandidatComponent } from './historique-candidat/historique-candidat.component';
import { HistoriqueCandidatRoutingModule } from './historique-candidat/historique-routing.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';



@NgModule({
  declarations: [
    HistoriqueCandidatComponent
  ],
  imports: [
    CommonModule,
    HistoriqueCandidatRoutingModule,
    FormsModule,
    TableModule,
    RatingModule,
    ButtonModule,
    SliderModule,
    InputTextModule,
    ToggleButtonModule,
    RippleModule,
    MultiSelectModule,
    DropdownModule,
    ProgressBarModule,
    ToastModule
  ]
})
export class HistoriqueModule { }
