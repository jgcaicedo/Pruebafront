import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../product.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true, // Marca el componente como standalone (independiente), no requiere un módulo Angular adicional.
  imports: [ReactiveFormsModule, RouterOutlet, CommonModule, FormsModule], // Importa módulos necesarios en el componente standalone.
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: any = null;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts() {
    
    this.productService.getProducts().subscribe(data => {
      this.products = data; 
      
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts(); 
    });
  }

  editProduct(product: any) {
    this.selectedProduct = { ...product }; // Clona el contacto seleccionado para poder editarlo.
  }

  updateProduct() {
    this.productService.updateProduct(this.selectedProduct.id, this.selectedProduct).subscribe(() => {
      this.loadProducts(); // Vuelve a cargar los contactos después de actualizar uno.
      this.selectedProduct = null; // Limpia la selección del contacto después de la edición.
    });
  }

  cancelEdit() {
    this.selectedProduct = null; // Cancela la edición y limpia la selección del contacto.
  }
}