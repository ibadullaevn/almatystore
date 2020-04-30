import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();
  category = new Subject();

  constructor(private http: HttpClient) { }

  sendMsg(product) {
    this.subject.next(product);
  }

  getMsg() {
    return this.subject.asObservable();
  }

  sendCatMsg(category) {
    this.category.next(category);
  }

  getCatMsg() {
    return this.category.asObservable();
  }
  getItem(): Observable<Product[]> {
    return this.http.get<Product[]>('http://127.0.0.1:8000/api/cart/');
  }
  deleteItem(id): Observable<Product[]> {
    return this.http.delete<Product[]>('http://127.0.0.1:8000/api/cart/' + id + '/');
  }

}
