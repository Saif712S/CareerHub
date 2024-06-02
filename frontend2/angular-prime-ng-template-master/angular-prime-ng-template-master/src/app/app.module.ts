import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';

//New TODO mydasboard
import { MydashboardComponent } from './demo/components/mydashboard/mydashboard.component';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { OAuthModule } from 'angular-oauth2-oidc';
import { ToastrModule } from 'ngx-toastr';
import { PresignupComponent } from './demo/components/presignup/presignup.component';
import { PresignupModule } from './demo/components/presignup/presignup.module';
import { AppFooterComponent } from './layout/app.footer.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { AppMenuComponent } from './layout/app.menu.component';
import { AppMenuitemComponent } from './layout/app.menuitem.component';
import { AppSidebarComponent } from './layout/app.sidebar.component';
import { AppTopBarComponent } from './layout/app.topbar.component';
import { AddEntrepriseComponent } from './demo/components/add-entreprise/add-entreprise.component';
import { AddEntrepriseDialogComponent } from './demo/components/add-entreprise-dialog/add-entreprise-dialog.component';
import { MaterialModuleModule } from './materialModule/material-module/material-module.module';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';


@NgModule({
    declarations: [
        AppComponent, NotfoundComponent, MydashboardComponent, AddEntrepriseComponent, AddEntrepriseDialogComponent,
       
    ],
    imports: [
        
        AppRoutingModule,
        AppLayoutModule,
        PresignupModule,
        TableModule,
        CommonModule,
        RatingModule,
        ButtonModule,
        SliderModule,
        InputTextModule,
        ToggleButtonModule,
        RippleModule,
        MultiSelectModule,
        DropdownModule,
        ProgressBarModule,
        ToastModule,
        FormsModule,
        CheckboxModule,
        PasswordModule,
        OAuthModule.forRoot(),
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        MaterialModuleModule,
        MatDialogModule




    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,MessageService,
        PhotoService, ProductService, {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {}}

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
