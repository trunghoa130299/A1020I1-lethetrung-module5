import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentReactiveFormCreateComponent} from './student-reactive-form-create/student-reactive-form-create.component';
import {StudentInformationComponent} from './student-information/student-information.component';


const routes: Routes = [
  {path: '', component: StudentListComponent},
  {path: 'create', component: StudentReactiveFormCreateComponent},
  {path: 'view/:id', component: StudentInformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
