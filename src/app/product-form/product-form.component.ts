import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService, Product } from '../product.service';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  standalone: true, // Indica que el componente es autónomo y no requiere un módulo específico.
  imports: [ReactiveFormsModule, RouterOutlet,CommonModule ], // Importa ReactiveFormsModule para formularios y RouterOutlet si es necesario.
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  isEditing = false;
  productId?: number;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      
    });
  }

  ngOnInit(): void {
    // Método que se ejecuta al inicializar el componente.
    this.productId = Number(this.route.snapshot.paramMap.get('id')); // Obtiene el ID del contacto desde los parámetros de la ruta.
    if (this.productId) {
      this.isEditing = true; // Activa el modo edición si hay un ID.
      this.productService.getProduct(this.productId).subscribe(product => {
        // Obtiene los datos del contacto y actualiza el formulario con esos datos.
        this.productForm.patchValue(product);
      });
    }
  }

  onSubmit(): void {
    // Método que se llama al enviar el formulario.
    if (this.productForm.valid) { // Verifica si el formulario es válido.
      const ProductData = this.productForm.value; // Obtiene los valores del formulario.
      if (this.isEditing && this.productId !== undefined) {
        // Si está en modo edición y el ID está definido, actualiza el producto.
        this.productService.updateProduct(this.productId, ProductData).subscribe(() => {
          window.location.reload(); // Recarga la página después de actualizar.
        });
      } else {
        // Si está en modo creación, crea un nuevo producto.
        this.productService.createProduct(ProductData).subscribe(() => {
          window.location.reload(); // Recarga la página después de crear.
        });
      }
    }
  }
  
}