import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

   
    
      userDialog: boolean = false;
    
      deleteUserDialog: boolean = false;
    
      deleteUsersDialog: boolean = false;
    
      users: User[] = [];
    
      user: User = new User();
    
      selectedUsers: User[] = [];
    
      submitted: boolean = false;
    
      cols: any[] = [];
    
      rowsPerPageOptions = [5, 10, 20];
    
      constructor(private userService: UserService, private messageService: MessageService) { }
    
      ngOnInit() {
          this.userService.list().subscribe(data => this.users = data);
    
          this.cols = [
              { field: 'lastName', header: 'Nom' },
              { field: 'firstName', header: 'Prénom' },
              { field: 'cin', header: 'CIN' },
              { field: 'email', header: 'Email' },
              { field: 'role', header: 'Role' },
          ];
      }
    
      openNew() {
          this.user = new User();
          this.submitted = false;
          this.userDialog = true;
      }
    
      deleteSelectedUsers() {
          this.deleteUsersDialog = true;
      }
    
      editUser(user: User) {
          this.user = { ...user };
          this.userDialog = true;
      }
    
      deleteUser(user: User) {
          this.deleteUserDialog = true;
          this.user = { ...user };
      }
    
      confirmDeleteSelected() {
          this.deleteUsersDialog = false;
          this.selectedUsers.forEach(user => {
            this.userService.delete(user.id).subscribe(() => {
              this.users = this.users.filter(val => val.id !== user.id);
            });
          });
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Users Deleted', life: 3000 });
          this.selectedUsers = [];
      }
    
      confirmDelete() {
          this.deleteUserDialog = false;
          this.userService.delete(this.user.id).subscribe(() => {
            this.users = this.users.filter(val => val.id !== this.user.id);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'User Deleted', life: 3000 });
            this.user = new User();
          });
      }
    
      hideDialog() {
          this.userDialog = false;
          this.submitted = false;
      }
    
      saveUser() {
          this.submitted = true;
    
          if (this.user.username?.trim()) {
              if (this.user.id) {
                  this.userService.update(this.user.id, this.user).subscribe(() => {
                    this.users[this.findIndexById(this.user.id)] = this.user;
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'User Updated', life: 3000 });
                    this.users = [...this.users];
                    this.userDialog = false;
                    this.user = new User();
                  });
              } else {
                  this.userService.updateprofile(this.user).subscribe(newUser => {
                    this.user.id = newUser.id; // Assuming the service returns the created user with an ID
                    this.users.push(newUser);
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'User Created', life: 3000 });
                    this.users = [...this.users];
                    this.userDialog = false;
                    this.user = new User();
                  });
              }
          }
      }
    
      findIndexById(id: number): number {
          return this.users.findIndex(user => user.id === id);
      }
    
      onGlobalFilter(table: Table, event: Event) {
          table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
      }
}
