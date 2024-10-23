import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
  { path: 'productos', component: ProductListComponent },
  { path: 'productos/nuevo', component: ProductFormComponent }, // Ruta para crear un nuevo producto
  { path: 'productos/editar/:id', component: ProductFormComponent }, // Ruta para editar un producto
  { path: '', redirectTo: '/productos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
