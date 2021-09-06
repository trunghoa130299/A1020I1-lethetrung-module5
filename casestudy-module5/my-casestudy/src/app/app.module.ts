import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import {CustomerModuleModule} from './customer/customer-module.module';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import {EmployeeModuleModule} from "./employee/employee-module.module";
import { ViewCustomerComponent } from './customer/view-customer/view-customer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerComponent,
    EmployeeComponent,
    HomeComponent,
    CreateEmployeeComponent,
    DeleteEmployeeComponent,
    EditEmployeeComponent,
    ViewEmployeeComponent,
    EditCustomerComponent,
    ViewCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModuleModule,
    EmployeeModuleModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
