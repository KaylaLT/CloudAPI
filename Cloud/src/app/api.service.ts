import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = 'http://localhost:3000/apis';
  idUrl: string = 'http://localhost:3000/apis';
  categoryUrl: string = 'http://localhost:3000/apis/?=category';
  updateUrl: string = 'http://localhost:3000/apis/:id';
  postUrl: string = 'http://localhost:3000/apis';
  deleteUrl: string = 'http://localhost:3000/apis/:id';

  
  constructor(private http: HttpClient) {}



   searchAPIS(search:string):Observable<any> {

    return this.http.get(this.apiUrl)
  }


  getID(id: number): Observable<any> {
    return this.http.get(`${this.idUrl}/${id}`);
  };


  getCategory(category: string): Observable<any> {
    return this.http.get(`${this.categoryUrl}/${category}`);
  };


  postNewAPI(): Observable<any> {
    return this.http.get(this.postUrl);
  };


  update(id: number): Observable<any> {
    return this.http.get(`${this.updateUrl}/${id}`);
  };


  delete(id: number): Observable<any> {
    return this.http.delete(`${this.deleteUrl}/${id}`);
  }


  };
