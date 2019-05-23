import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: "create", component: CreateComponent },
  { path: "search", component: SearchComponent },
 
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
