import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EntrepriseManagementComponent } from './entreprise-management.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: EntrepriseManagementComponent }
    ])],
    exports: [RouterModule]
})
export class EntrepriseManagementRoutingModule { }
