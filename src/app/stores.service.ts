import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Store} from './models/store';

let storesApiUrl;
storesApiUrl = 'localhost:3000/stores';

@Injectable()
export class StoresService {

  constructor(private http: HttpClient) { }
  getUserStores(user_id: number) {
    return this.http.get(storesApiUrl + user_id);
  }
  getAllStores(): Observable<Store[]> {
      return this.http.get<Store[]>('http://localhost:3000/stores');
  }
  getStore(store_id: number) {
    return this.http.get(storesApiUrl + '/store/' + store_id);
  }

  deleteStore(store_id: number) {
    return this.http.delete(storesApiUrl + '/store/' + store_id);
  }
}
