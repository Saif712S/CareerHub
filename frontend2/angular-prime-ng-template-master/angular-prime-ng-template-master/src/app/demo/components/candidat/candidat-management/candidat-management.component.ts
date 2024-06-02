import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { Candidatures } from 'src/app/model/candidatures';
import { CandidaturesService } from 'src/app/services/candidatures.service';

@Component({
  selector: 'app-candidat-management',
  templateUrl: './candidat-management.component.html',
  styleUrls: ['./candidat-management.component.scss']
})
export class CandidatManagementComponent implements OnInit {


    candidatureDialog: boolean = false;
    deleteCandidatureDialog: boolean = false;
    deleteCandidaturesDialog: boolean = false;
  
    candidatures: Candidatures[] = [];
    selectedCandidature: Candidatures[] = []; // Change selectedCandidatures to selectedCandidature
  
    submitted: boolean = false;
  
    cols: any[] = [];
  
    rowsPerPageOptions = [5, 10, 20];
  
    constructor(private candidaturesService: CandidaturesService, private messageService: MessageService) { }
  
    ngOnInit() {
      this.loadCandidatures();
      this.cols = [
        { field: 'username', header: 'Username' }, // Corrected header names
        { field: 'dateSoumission', header: 'Date de Soumission' },
        { field: 'status', header: 'Status' },
        { field: 'email', header: 'Email' },
        { field: 'offreEmploi', header: 'Offre d\'emploi' }, // Corrected header name
      ];
    }
  
    loadCandidatures() {
      this.candidaturesService.getAllCandidatures().subscribe(
        data => {
          this.candidatures = data;
        },
        error => {
          console.error('Une erreur est survenue lors du chargement des candidatures : ', error);
        }
      );
    }
  
    deleteCandidature(id: number) {
      this.candidaturesService.deleteCandidature(id).subscribe(
        () => {
          this.messageService.add({ severity: 'success', summary: 'Candidature supprimée', detail: 'La candidature a été supprimée avec succès.' });
          this.loadCandidatures();
        },
        error => {
          console.error('Une erreur est survenue lors de la suppression de la candidature : ', error);
        }
      );
    }
  
    updateCandidature(id: number, updatedCandidature: Candidatures) {
      this.candidaturesService.updateCandidature(id, updatedCandidature).subscribe(
        () => {
          this.messageService.add({ severity: 'success', summary: 'Candidature mise à jour', detail: 'La candidature a été mise à jour avec succès.' });
          this.loadCandidatures();
        },
        error => {
          console.error('Une erreur est survenue lors de la mise à jour de la candidature : ', error);
        }
      );
    }
  
    onGlobalFilter(table: any, event: Event) { // Change Table to any
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
  }