import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CandidatManagementComponent } from './candidat-management.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: CandidatManagementComponent }
    ])],
    exports: [RouterModule]
})
export class CandidatManagementRoutingModule { }
