import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { SignupRequestPayload } from '../model/SignupRequestPayload';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiServiceUrl=environment.apiBaseUrl1;
  httpClient: any;
  httpOption={headers:new HttpHeaders({'Content-type':'application/json'})}


  constructor(private oauthService:OAuthService,private http:HttpClient) { }
  public login():void{
    this.oauthService.initImplicitFlowInternal();
    this.oauthService.events.subscribe(event => {
      if (event.type === 'token_received') {
        // Save token to localStorage
        localStorage.setItem('access_token', this.oauthService.getAccessToken());
      }
    });
  
  }
 
  public isLoggedIn():boolean{
    return (this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken());
  }
  public logout():void{
    this.oauthService.logOut();
  }
  public getUsername():string{
    const token=this.oauthService.getAccessToken();
    const payload=token.split('.')[1];
    const payloadDecodedJson=atob(payload);
    const payloadDecoded= JSON.parse(payloadDecodedJson);
    const preferredUsername = payloadDecoded.preferred_username
   return preferredUsername;
  }
  public getTOKEN():string{
    const token=this.oauthService.getAccessToken();


   return token;
  }
  public getUserId(): string {
    const token = this.oauthService.getAccessToken();
    const payload = token.split('.')[1];
    const payloadDecodedJson = atob(payload);
    const payloadDecoded = JSON.parse(payloadDecodedJson);
    const userId = payloadDecoded.sub; // Assuming the user ID is in the 'sub' claim
    return userId;
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
  public getIsLoggedIn():boolean{

    return (this.oauthService.hasValidAccessToken() && this.oauthService.hasValidAccessToken());
  }
  signup(signupRequestPayload: SignupRequestPayload): Observable<any> {
    console.log(signupRequestPayload)
    return this.http.post<any>(`${this.apiServiceUrl}/user/signup`, signupRequestPayload);
  }
  addRh(signupRequestPayload: SignupRequestPayload): Observable<any> {
    console.log(signupRequestPayload)
    return this.http.post<any>(`${this.apiServiceUrl}/user/AddResponsableRH`, signupRequestPayload, {
      headers: {
        'Authorization': `Bearer ${this.getTOKEN()}`,
        'Content-type':'application/json'

      }
    });
  }
  addAdmin(signupRequestPayload: SignupRequestPayload): Observable<any> {
    console.log(signupRequestPayload)
    return this.http.post<any>(`${this.apiServiceUrl}/user/AddAdmin`, signupRequestPayload, {
      headers: {
        'Authorization': `Bearer ${this.getTOKEN()}`,
        'Content-type':'application/json'

      }
    });
  }
  addUserByAdmin(signupRequestPayload: SignupRequestPayload): Observable<any> {
    console.log(signupRequestPayload)
    return this.http.post<any>(`${this.apiServiceUrl}/user/admin/addUserByAdmin`, signupRequestPayload, {
      headers: {
        'Authorization': `Bearer ${this.getTOKEN()}`,
        'Content-type':'application/json'

      }
    });
  }


}
