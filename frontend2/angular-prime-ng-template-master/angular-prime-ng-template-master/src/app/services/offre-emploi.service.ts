import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OffreEmploi } from '../model/OffreEmploi';


@Injectable({
  providedIn: 'root'
})
export class OffreEmploiService {

  private apiServiceUrl=environment.apiBaseUrl2;
  constructor(private http: HttpClient) { }

  
  getAllOffres(): Observable<Array<OffreEmploi>> {
    return this.http.get<Array<OffreEmploi>>(`${this.apiServiceUrl}/offre-emploi/all`);
  }

  getOffreById(id: number): Observable<OffreEmploi> {
    return this.http.get<OffreEmploi>(`${this.apiServiceUrl}/offre-emploi/getOffreById/${id}`);
  }

  addOffre(offre: OffreEmploi): Observable<OffreEmploi> {
    return this.http.post<OffreEmploi>(`${this.apiServiceUrl}/offre-emploi/add`, offre);
  }

  updateOffre(offre: OffreEmploi, id: number): Observable<OffreEmploi> {
    return this.http.put<OffreEmploi>(`${this.apiServiceUrl}/offre-emploi/update/${id}`, offre);
  }

  deleteOffre(id: number): Observable<Map<string, boolean>> {
    return this.http.delete<Map<string, boolean>>(`${this.apiServiceUrl}/offre-emploi/delete/${id}`);
  }

  public getAllCandidature(): Observable<any> {
    return this.http.get<any>(`${this.apiServiceUrl}/candidature/getCandidatures`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer YOUR_TOKEN_HERE`, // Remplacez YOUR_TOKEN_HERE par la méthode d'obtention du token
        'Content-type': 'application/json'
      })
    });
  }
}
