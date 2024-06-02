import { OffreEmploi } from "./OffreEmploi";

export interface Candidature {
    candidatureId:number;
    username: string;
    dateSoumission: string;
    status: string;
    offreEmploi:OffreEmploi
   
}