import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, NullValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .p-password input {
            width: 100%;
            padding:1rem;
        }

        :host ::ng-deep .pi-eye{
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }

        :host ::ng-deep .pi-eye-slash{
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {
    username!:string;
  isLoggedIn!:boolean;
  isAdmin!:boolean;
  @Input() isLogged!:boolean;
  @Input() isAdminn!:boolean;

    valCheck: string[] = ['remember'];

    password!: string;

constructor(public layoutService: LayoutService,private oauthService:OAuthService)
 {  
    this.configure();
 }
    authFlowConfig: AuthConfig = {
        issuer: 'http://localhost:8080/realms/CareerHub',
        requireHttps: false,
        redirectUri: window.location.origin,
        clientId: 'angular-client',
        responseType: 'code',
        scope: 'openid profile email offline_access',
    
        showDebugInformation: true,
      };
      configure():void{
        this.oauthService.configure(this.authFlowConfig);
        this.oauthService.tokenValidationHandler=new NullValidationHandler;
        this.oauthService.setupAutomaticSilentRefresh();
        this.oauthService.loadDiscoveryDocument().then(()=>this.oauthService.tryLogin())
        .then (()=>{
          if(this.oauthService.getIdentityClaims()){
            this.isLoggedIn=this.getIsLoggedIn();
            this.isAdmin=this.getIsAdmin();
            this.username=this.getUsername();
    
           // this.preferredUsername;
           // this.username=this.oauthService.()[`preferred_username`];
          }
        });
    
      }
      login():void{

        this.oauthService.initImplicitFlowInternal();
      }
      public getIsLoggedIn():boolean{
    
        return (this.oauthService.hasValidAccessToken() && this.oauthService.hasValidAccessToken());
      }
      logout():void{
        this.oauthService.logOut();
    
      }
    
    
    
      public getIsAdmin():boolean{
        const token=this.oauthService.getAccessToken();
        const payload=token.split('.')[1];
        const payloadDecodedJson=atob(payload);
        const payloadDecoded= JSON.parse(payloadDecodedJson);
        const preferredUsername = payloadDecoded.preferred_username
        console.log(payloadDecoded);
        console.log(preferredUsername)
        return payloadDecoded.realm_access.roles.indexOf('Admin') !==-1;
    
      }
      public getUsername():string{
        const token=this.oauthService.getAccessToken();
        const payload=token.split('.')[1];
        const payloadDecodedJson=atob(payload);
        const payloadDecoded= JSON.parse(payloadDecodedJson);
        const preferredUsername = payloadDecoded.preferred_username
       return preferredUsername;
      }
    
        
}
