import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResponsableRhManagementComponent } from './responsable-rh-management.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ResponsableRhManagementComponent }
    ])],
    exports: [RouterModule]
})
export class ResponsableRhRoutingModule { }
