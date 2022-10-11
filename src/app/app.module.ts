import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BooksModule } from './books/books.module';
import {HttpClientModule} from '@angular/common/http';
import { CartComponent } from './cart/cart.component' 
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    // BooksComponent,
    // BookComponent
  ],
  imports: [
     BrowserModule,
     AppRoutingModule,
     BooksModule,
     AuthModule,
     HttpClientModule,
  ],
  
  
  bootstrap: [AppComponent]
})
export class AppModule { }
