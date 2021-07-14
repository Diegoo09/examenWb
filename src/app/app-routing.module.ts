import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '../app/components/inicio/inicio.component';
import {LibrosComponent} from '../app/components/libros/libros.component';
import {QuejasComponent} from '../app/components/quejas/quejas.component'

const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:"quejas", component:QuejasComponent},
  {path:"libros", component:LibrosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
