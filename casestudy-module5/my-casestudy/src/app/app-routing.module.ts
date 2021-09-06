import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ng2SearchPipeModule } from 'ng2-search-filter';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    Ng2SearchPipeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
