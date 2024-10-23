// product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:4000/productos'; 

  constructor(private http: HttpClient) { }

  // Método para obtener todos los Productos
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // Método para obtener un Producto por ID
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  // Método para crear un nuevo Producto
  createProduct(Product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, Product);
  }

  // Método para actualizar un Producto existente
  updateProduct(id: number, Product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, Product);
  }

  // Método para eliminar un Producto por ID
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

export type { Product };
