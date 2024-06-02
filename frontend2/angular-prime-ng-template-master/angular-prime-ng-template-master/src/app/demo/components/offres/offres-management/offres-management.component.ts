import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { OffreEmploi } from 'src/app/model/OffreEmploi';
import { OffreEmploiService } from 'src/app/services/offre-emploi.service';

@Component({
  selector: 'app-offres-management',
  templateUrl: './offres-management.component.html',
  styleUrls: ['./offres-management.component.scss']
})
export class OffresManagementComponent implements OnInit {

  /* productDialog: boolean = false;

  deleteProductDialog: boolean = false;

  deleteProductsDialog: boolean = false;

  products: Product[] = [];

  product: Product = {};

  selectedProducts: Product[] = [];

  submitted: boolean = false;

  cols: any[] = [];

  statuses: any[] = [];

  rowsPerPageOptions = [5, 10, 20];

  constructor(private productService: ProductService, private messageService: MessageService) { }

  ngOnInit() {
      this.productService.getProducts().then(data => this.products = data);

      this.cols = [
          { field: 'titre', header: 'Titre' },
          { field: 'typeOffre', header: 'Type de l\'offre' },
          { field: 'PosteVacants', header: 'Poste' },
          { field: 'Genre', header: 'Genre' },
          { field: 'Langues', header: 'Langues' },
          { field: 'Salaire', header: 'Langues' },
          { field: 'ExigencesEmploi', header: 'Exigences' },
          { field: 'datePoste', header: 'Date de publication' },
          { field: 'dateFin', header: 'Date d\'expiration' },
          { field: 'description', header: 'Description' },
      ];

    
  }

  openNew() {
      this.product = {};
      this.submitted = false;
      this.productDialog = true;
  }

  deleteSelectedProducts() {
      this.deleteProductsDialog = true;
  }

  editProduct(product: Product) {
      this.product = { ...product };
      this.productDialog = true;
  }

  deleteProduct(product: Product) {
      this.deleteProductDialog = true;
      this.product = { ...product };
  }

  confirmDeleteSelected() {
      this.deleteProductsDialog = false;
      this.products = this.products.filter(val => !this.selectedProducts.includes(val));
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      this.selectedProducts = [];
  }

  confirmDelete() {
      this.deleteProductDialog = false;
      this.products = this.products.filter(val => val.id !== this.product.id);
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
      this.product = {};
  }

  hideDialog() {
      this.productDialog = false;
      this.submitted = false;
  }

  saveProduct() {
      this.submitted = true;

      if (this.product.name?.trim()) {
          if (this.product.id) {
              // @ts-ignore
              this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value : this.product.inventoryStatus;
              this.products[this.findIndexById(this.product.id)] = this.product;
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
          } else {
              this.product.id = this.createId();
              this.product.code = this.createId();
              this.product.image = 'product-placeholder.svg';
              // @ts-ignore
              this.product.inventoryStatus = this.product.inventoryStatus ? this.product.inventoryStatus.value : 'INSTOCK';
              this.products.push(this.product);
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
          }

          this.products = [...this.products];
          this.productDialog = false;
          this.product = {};
      }
  }

  findIndexById(id: string): number {
      let index = -1;
      for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id === id) {
              index = i;
              break;
          }
      }

      return index;
  }

  createId(): string {
      let id = '';
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < 5; i++) {
          id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
  }

  onGlobalFilter(table: Table, event: Event) {
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  } */





  offreDialog: boolean = false;
  deleteOffreDialog: boolean = false;
  deleteOffresDialog: boolean = false;

  offres: OffreEmploi[] = [];
  offre!: OffreEmploi;
  selectedOffres: OffreEmploi[] = [];
  submitted: boolean = false;
  cols: any[] = [];

  constructor(private offreEmploiService: OffreEmploiService, private messageService: MessageService) {}

  ngOnInit() {
      this.offreEmploiService.getAllOffres().subscribe(data => this.offres = data);

      this.cols = [
          { field: 'titre', header: 'Titre' },
          { field: 'typeOffre', header: 'Type de l\'offre' },
          { field: 'postesVacants', header: 'Postes Vacants' },
          { field: 'genre', header: 'Genre' },
          { field: 'langues', header: 'Langues' },
          { field: 'salaire', header: 'Salaire' },
          { field: 'exigencesEmploi', header: 'Exigences' },
          { field: 'datePost', header: 'Date de publication' },
          { field: 'dateFin', header: 'Date d\'expiration' },
          { field: 'description', header: 'Description' }
      ];
  }

  openNew() {
    this.offre = {
        offreId: 0, 
        titre: '',
        typeOffre: '',
        postesVacants: '',
        genre: '',
        langues: '',
        salaire: 0,
        exigencesEmploi: '',
        datePost: new Date(),
        dateFin: new Date(),
        description: '',
        username: ''
      };
      this.submitted = false;
      this.offreDialog = true;
  }

  deleteSelectedOffres() {
      this.deleteOffresDialog = true;
  }

  editOffre(offre: OffreEmploi) {
      this.offre = { ...offre };
      this.offreDialog = true;
  }

  deleteOffre(offre: OffreEmploi) {
      this.deleteOffreDialog = true;
      this.offre = { ...offre };
  }

  confirmDeleteSelected() {
      this.deleteOffresDialog = false;
      const ids = this.selectedOffres.map(off => off.offreId);
      ids.forEach(id => {
          this.offreEmploiService.deleteOffre(id).subscribe(() => {
              this.offres = this.offres.filter(val => val.offreId !== id);
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Offres Deleted', life: 3000 });
          });
      });
      this.selectedOffres = [];
  }

  confirmDelete() {
      this.deleteOffreDialog = false;
      this.offreEmploiService.deleteOffre(this.offre.offreId).subscribe(() => {
          this.offres = this.offres.filter(val => val.offreId !== this.offre.offreId);
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Offre Deleted', life: 3000 });
          this.offre = {
            offreId: 0, 
            titre: '',
            typeOffre: '',
            postesVacants: '',
            genre: '',
            langues: '',
            salaire: 0,
            exigencesEmploi: '',
            datePost: new Date(),
            dateFin: new Date(),
            description: '',
            username: ''
          };
      });
  }

  hideDialog() {
      this.offreDialog = false;
      this.submitted = false;
  }

  saveOffre() {
      this.submitted = true;
      if (this.offre.titre?.trim()) {
          if (this.offre.offreId) {
              this.offreEmploiService.updateOffre(this.offre, this.offre.offreId).subscribe(updatedOffre => {
                  this.offres = this.offres.map(off => off.offreId === updatedOffre.offreId ? updatedOffre : off);
                  this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Offre Updated', life: 3000 });
              });
          } else {
              this.offreEmploiService.addOffre(this.offre).subscribe(newOffre => {
                  this.offres.push(newOffre);
                  this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Offre Added', life: 3000 });
              });
          }

          this.offres = [...this.offres];
          this.offreDialog = false;
          this.offre = {
            offreId: 0, 
            titre: '',
            typeOffre: '',
            postesVacants: '',
            genre: '',
            langues: '',
            salaire: 0,
            exigencesEmploi: '',
            datePost: new Date(),
            dateFin: new Date(),
            description: '',
            username: ''
          };
      }
  }


  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
}

}
