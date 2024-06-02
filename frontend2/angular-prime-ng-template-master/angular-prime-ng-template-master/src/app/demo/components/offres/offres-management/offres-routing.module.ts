import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OffresManagementComponent } from './offres-management.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: OffresManagementComponent }
    ])],
    exports: [RouterModule]
})
export class OffresRoutingModule { }
