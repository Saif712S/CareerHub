import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AcceuilManagementComponent } from './acceuil-management.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AcceuilManagementComponent }
    ])],
    exports: [RouterModule]
})
export class AcceuilRoutingModule { }
