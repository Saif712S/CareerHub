import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { Entreprise } from 'src/app/model/Entreprise';
import { EntrepriseService } from 'src/app/services/entreprise.service';

@Component({
  selector: 'app-entreprise-management',
  templateUrl: './entreprise-management.component.html',
  styleUrls: ['./entreprise-management.component.scss']
})
export class EntrepriseManagementComponent implements OnInit {

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
          { field: 'nom', header: 'Nom' },
          { field: 'secteur', header: 'Secteur' },
          { field: 'logo', header: 'Logo' },
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
  }

 */



  entrepriseDialog: boolean = false;
  deleteEntrepriseDialog: boolean = false;
  deleteEntreprisesDialog: boolean = false;
  entreprises: Entreprise[] = [];
  entreprise: Entreprise = { Entreprise_id: 0, username: '', nom: '', description: '', logo: '', secteur: '' };
  selectedEntreprises: Entreprise[] = [];
  submitted: boolean = false;
  cols: any[] = [];
  rowsPerPageOptions = [5, 10, 20];

  constructor(private entrepriseService: EntrepriseService, private messageService: MessageService) { }

  ngOnInit() {
    this.entrepriseService.getAllEntreprises().subscribe(data => this.entreprises = data);

    this.cols = [
      { field: 'nom', header: 'Nom' },
      { field: 'secteur', header: 'Secteur' },
      { field: 'logo', header: 'Logo' },
      { field: 'description', header: 'Description' },
      { field: 'username', header: 'Username' }
    ];
  }

  openNew() {
    this.entreprise = { Entreprise_id: 0, username: '', nom: '', description: '', logo: '', secteur: '' };
    this.submitted = false;
    this.entrepriseDialog = true;
  }

  deleteSelectedEntreprises() {
    this.deleteEntreprisesDialog = true;
  }

  editEntreprise(entreprise: Entreprise) {
    this.entreprise = { ...entreprise };
    this.entrepriseDialog = true;
  }

  deleteEntreprise(entreprise: Entreprise) {
    this.deleteEntrepriseDialog = true;
    this.entreprise = { ...entreprise };
  }

  confirmDeleteSelected() {
    this.deleteEntreprisesDialog = false;
    this.selectedEntreprises.forEach(entreprise => {
      this.entrepriseService.deleteEntreprise(entreprise.Entreprise_id).subscribe(() => {
        this.entreprises = this.entreprises.filter(val => val.Entreprise_id !== entreprise.Entreprise_id);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Entreprises Deleted', life: 3000 });
      });
    });
    this.selectedEntreprises = [];
  }

  confirmDelete() {
    this.deleteEntrepriseDialog = false;
    this.entrepriseService.deleteEntreprise(this.entreprise.Entreprise_id).subscribe(() => {
      this.entreprises = this.entreprises.filter(val => val.Entreprise_id !== this.entreprise.Entreprise_id);
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Entreprise Deleted', life: 3000 });
      this.entreprise = { Entreprise_id: 0, username: '', nom: '', description: '', logo: '', secteur: '' };
    });
  }

  hideDialog() {
    this.entrepriseDialog = false;
    this.submitted = false;
  }

  saveEntreprise() {
    this.submitted = true;

    if (this.entreprise.nom.trim()) {
      if (this.entreprise.Entreprise_id) {
        this.entrepriseService.updateEntreprise(this.entreprise.Entreprise_id, this.entreprise).subscribe(data => {
          this.entreprises[this.findIndexById(this.entreprise.Entreprise_id)] = data;
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Entreprise Updated', life: 3000 });
          this.entreprises = [...this.entreprises];
          this.entrepriseDialog = false;
          this.entreprise = { Entreprise_id: 0, username: '', nom: '', description: '', logo: '', secteur: '' };
        });
      } else {
        this.entrepriseService.addEntreprise(this.entreprise).subscribe(data => {
          this.entreprises.push(data);
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Entreprise Created', life: 3000 });
          this.entreprises = [...this.entreprises];
          this.entrepriseDialog = false;
          this.entreprise = { Entreprise_id: 0, username: '', nom: '', description: '', logo: '', secteur: '' };
        });
      }
    }
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.entreprises.length; i++) {
      if (this.entreprises[i].Entreprise_id === id) {
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
