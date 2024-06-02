import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Candidature } from '../model/Candidature';

@Injectable({
  providedIn: 'root'
})
export class CandidaturesService {

  private apiServiceUrl=environment.apiBaseUrl2;
  httpClient: any;
  httpOption={headers:new HttpHeaders({'Content-type':'application/json'})}


  constructor(private http: HttpClient) { }

  getAllCandidatures(): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(`${this.apiServiceUrl}/candidature/getCandidatures`);
  }


  deleteCandidature(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServiceUrl}/candidature/delete/${id}`);
  }

  updateCandidature(id: number, updatedCandidature: any): Observable<any> {
    return this.http.put<any>(`${this.apiServiceUrl}/candidature/update/${id}`, updatedCandidature);
  }

  getCandidatureByStatus(): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(`${this.apiServiceUrl}/candidature/getCandidatureByStatus`);
  }
  
}
