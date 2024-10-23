// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routes';


@NgModule({
  declarations: [
    
   
  ],
  imports: [
    ProductListComponent,
    ProductFormComponent,
    AppComponent, // Añadido AppComponent
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule, 
    CommonModule,
  ],
  providers: [],
  bootstrap: [] // Configurado AppComponent como componente de arranque
})
export class AppModule { }