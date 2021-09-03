import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";
import {EmployeeComponent} from "./employee.component";
import {DeleteEmployeeComponent} from "./delete-employee/delete-employee.component";
import {ViewEmployeeComponent} from "./view-employee/view-employee.component";
import {EditEmployeeComponent} from "./edit-employee/edit-employee.component";

const routesEmployee: Routes = [
  {path: 'createEmployee', component: CreateEmployeeComponent},
  {path: 'listEmployee', component: EmployeeComponent},
  {path: 'deleteEmployee/:id', component: DeleteEmployeeComponent},
  {path: 'viewEmployee/:id', component: ViewEmployeeComponent},
  {path: 'editEmployee/:id', component: EditEmployeeComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routesEmployee)
  ]
})
export class RouterEmployeeModule { }
