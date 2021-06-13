import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = 'http://localhost:3000/apis'; // this returns all APIs with category search term
  idUrl: string = 'http://localhost:3000/apis/:id';
  categoryUrl: string = 'http://localhost:3000/apis/:category';
  updateUrl: string = 'http://localhost:3000/apis/:id';
  postUrl: string = 'http://localhost:3000/apis';
  deleteUrl: string = 'http://localhost:3000/apis/:id';
  nameURL: string = 'http://localhost:3000/apis/:name';

  
  constructor(private http: HttpClient) {}



   searchAPIS(search:string):Observable<any> {

    return this.http.get(this.apiUrl)
   }
  


  getID(id: number): Observable<any> {
    return this.http.get(`${this.idUrl}/${id}`);
  };



  getName(name: string): Observable<any> {
    return this.http.get(`${this.nameURL}/${name}`);
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