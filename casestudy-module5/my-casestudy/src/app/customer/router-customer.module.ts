import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import {CustomerComponent} from "./customer.component";
import {HomeComponent} from "../home/home.component";
import {EditCustomerComponent} from "./edit-customer/edit-customer.component";
import {ViewCustomerComponent} from "./view-customer/view-customer.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from 'ngx-pagination';


const routesCustomer: Routes = [
  {path: 'createCustomer', component: CreateCustomerComponent},
  {path: 'listCustomer', component: CustomerComponent},
  {path: 'deleteCustomer/:id', component: DeleteCustomerComponent},
  {path: 'editCustomer/:id', component: EditCustomerComponent},
  {path: 'viewCustomer/:id', component: ViewCustomerComponent},
  {path: '', component: HomeComponent},
];
@NgModule({
  declarations: [CreateCustomerComponent, DeleteCustomerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routesCustomer),
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class RouterCustomerModule { }
