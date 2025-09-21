import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { ProductsApi } from '../../services/products-api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [CurrencyPipe, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  @Input() searchWord: string = '';

  products: any[] = [];

  constructor(private productsService: ProductsApi) {
    this.getAllProducts();
  }

  onInput () {
    // console.log(this.searchWord);
    this.getSearchProducts();
  }

  getAllProducts() {
    this.productsService.getAllProducts().subscribe((response)=> {
      this.products = response.products;
      // console.log(this.products);
    });
  }

  getSearchProducts() {
    if(this.searchWord) {
      this.productsService.getSearchProducts(this.searchWord).subscribe((response) => {
        this.products = response.products;
      });
    }
    else {
      this.getAllProducts();
    }
  }

  addToCart(product: any) {
    product.stock--;
  }

}
