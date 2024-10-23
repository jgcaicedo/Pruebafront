import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
   standalone: true,
   imports: [RouterOutlet, CommonModule, ReactiveFormsModule, ProductFormComponent, ProductListComponent], // Importa módulos y componentes necesarios en el componente standalone.

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'] // Corregido de styleUrl a styleUrls
})
export class AppComponent {
  title = 'Pruebafront';

  
  isProductListVisible = true; // Bandera para mostrar u ocultar la lista de Productos.
  isProductFormVisible = false; // Bandera para mostrar u ocultar el formulario de Producto.

  // Método para mostrar la lista de Productos y ocultar el formulario de Producto.
  showProductList() {
    this.isProductListVisible = true;
    this.isProductFormVisible = false;
  }

  // Método para mostrar el formulario de Producto y ocultar la lista de Productos.
  showProductForm() {
    this.isProductListVisible = false;
    this.isProductFormVisible = true;
  }
}
