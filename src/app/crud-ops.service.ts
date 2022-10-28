import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudOpsService {

  url: string = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  getCounts() {
    return this.http.get(`${this.url}/counts`)
  }

  getCountById(id: any) {
    return this.http.get(`${this.url}/counts/${id}`)
  }

  addCount(title: any, reponsible: any, description: any) {
    const count = {
      status: title,
      reponsible: reponsible,
      description: description
    };
    return this.http.post(`${this.url}/counts/add`, count)
  }

  updateCount(id: any, title: any, reponsible: any, description: any, status: any) {
    const count = {
      title: title,
      reponsible: reponsible,
      description: description,
      status: status

    };
    return this.http.post(`${this.url}/counts/update/${id}`, count)
  }

  deleteCount(id: any) {
      return this.http.get(`${this.url}/counts/delete/${id}`);
  }
}
