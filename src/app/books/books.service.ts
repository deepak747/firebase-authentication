// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class BooksService {


  constructor() { }

   getBooks(){
    return [
      {
        name: 'Clean code',
        author: 'Dubey ji',
        image: 'https://m.media-amazon.com/images/I/61+Qbwu03kL._AC_UY327_FMwebp_QL65_.jpg',
        ammount: 600
      },
      {
        name: 'Clean code',
        author: 'Dubey ji',
        image: 'https://m.media-amazon.com/images/I/61+Qbwu03kL._AC_UY327_FMwebp_QL65_.jpg',
        ammount: 800
      },
      {
        name: 'Clean code',
        author: 'Dubey ji',
        image: 'https://m.media-amazon.com/images/I/61+Qbwu03kL._AC_UY327_FMwebp_QL65_.jpg',
        ammount: 700
      },
      {
        name: 'Clean code',
        author: 'Dubey ji',
        image: 'https://m.media-amazon.com/images/I/61+Qbwu03kL._AC_UY327_FMwebp_QL65_.jpg',
        ammount: 900
      }
    ];
   }  

   


}
