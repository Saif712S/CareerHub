import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HistoriqueCandidatComponent } from './historique-candidat.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: HistoriqueCandidatComponent }
    ])],
    exports: [RouterModule]
})
export class HistoriqueCandidatRoutingModule { }
