import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddproductComponent } from './addproduct/addproduct.component';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  declarations: [AddproductComponent, PerfilComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
