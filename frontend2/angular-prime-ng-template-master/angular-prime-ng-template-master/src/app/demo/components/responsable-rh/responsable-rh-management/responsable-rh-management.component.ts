import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { ResponsableRH } from 'src/app/model/responsable-rh';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-responsable-rh-management',
  templateUrl: './responsable-rh-management.component.html',
  styleUrls: ['./responsable-rh-management.component.scss']
})
export class ResponsableRhManagementComponent implements OnInit {

    responsableDialog: boolean = false;
    deleteResponsableDialog: boolean = false;
    deleteResponsablesDialog: boolean = false;
    responsables: ResponsableRH[] = [];
    //responsable :ResponsableRH={} ;
    responsable: ResponsableRH = new ResponsableRH();
  
    selectedResponsables: ResponsableRH[] = [];
  
    submitted: boolean = false;
  
    cols: any[] = [];
  
    rowsPerPageOptions = [5, 10, 20];
  
    constructor(private userService: UserService, private messageService: MessageService) { }
  
    ngOnInit() {
        this.userService.listRH().subscribe(data => this.responsables = data); // Utilisez la méthode list() pour récupérer la liste des utilisateurs
  
        this.cols = [
            { field: 'lastName', header: 'Nom' },
            { field: 'firstName', header: 'Prénom' },
            { field: 'cin', header: 'CIN' },
            { field: 'email', header: 'Email' },
            { field: 'role', header: 'Role' },
            { field: 'nom_Entreprise', header:'Nom Entreprise'}
        ];
    }
  
    openNew() {
        this.responsable = new ResponsableRH();
        this.submitted = false;
        this.responsableDialog = true;
    }
  
    deleteSelectedResponsables() {
        this.deleteResponsablesDialog = true;
    }
  
    editResponsable(responsable: ResponsableRH) {
        this.responsable = { ...responsable };
        this.responsableDialog = true;
    }
  
    deleteResponsable(responsable: ResponsableRH) {
        this.deleteResponsableDialog = true;
        this.responsable = { ...responsable };
    }
  
    confirmDeleteSelected() {
        this.deleteResponsablesDialog = false;
        // Supprimez les responsables sélectionnés en utilisant la méthode delete() du service
        this.selectedResponsables.forEach(responsable => {
          this.userService.delete(responsable.id).subscribe(() => {
            this.responsables = this.responsables.filter(r => r.id !== responsable.id);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Responsables Deleted', life: 3000 });
          });
        });
        this.selectedResponsables = [];
    }
  
    confirmDelete() {
        this.deleteResponsableDialog = false;
        // Supprimez le responsable en utilisant la méthode delete() du service
        this.userService.delete(this.responsable.id).subscribe(() => {
          this.responsables = this.responsables.filter(r => r.id !== this.responsable.id);
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Responsable Deleted', life: 3000 });
          this.responsable = new ResponsableRH();
        });
    }
  
    hideDialog() {
        this.responsableDialog = false;
        this.submitted = false;
    }
  
    saveResponsable() {
        this.submitted = true;
  
        if (this.responsable.username?.trim() && this.responsable.email?.trim() && this.responsable.password?.trim()) {
            if (this.responsable.id) {
                this.userService.update(this.responsable.id, this.responsable).subscribe(() => {
                  const index = this.findIndexById(this.responsable.id);
                  this.responsables[index] = this.responsable;
                  this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Responsable Updated', life: 3000 });
                });
            } else {
                this.userService.addResponsableRH(this.responsable).subscribe((newResponsable) => {
                  this.responsables.push(newResponsable);
                  this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Responsable Created', life: 3000 });
                });
            }
  
            this.responsableDialog = false;
            this.responsable = new ResponsableRH();;
        }
    }
  
    findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.responsables.length; i++) {
            if (this.responsables[i].id === id) {
                index = i;
                break;
            }
        }
  
        return index;
    }
  
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
  }