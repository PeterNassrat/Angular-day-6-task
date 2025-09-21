import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from '../constants/API_URLS';

@Injectable({
  providedIn: 'root'
})
export class ProductsApi {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.httpClient.get(API_URLS.ALL_PRODUCTS);
  }

  getSearchProducts(searchWord: string): Observable<any> {
    return this.httpClient.get(`${API_URLS.SEARCH_PRODUCTS}${searchWord}`);
  }
}
