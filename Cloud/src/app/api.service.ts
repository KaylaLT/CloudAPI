import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = 'http://localhost:3000/apis/:id';
  categoryUrl: string = 'http://localhost:3000/apis/?=category';
  updateUrl: string = 'http://localhost:3000/apis/:id';
  postUrl: string = 'http://localhost:3000/apis';
  deleteUrl: string = 'http://localhost:3000/apis/:id';

  
  constructor(private http: HttpClient) {}




  getID(id: number){
    return this.http.get(this.apiUrl);
    // `http://localhost:3000/apis/${id}`
  };

  getCategory(){
    return this.http.get(this.categoryUrl);
    // 'http://localhost:3000/apis/?=category'
  };

  postNewAPI(){
    return this.http.get(this.postUrl);
    // 'http://localhost:3000/apis'
  };

  update(id: any){
    return this.http.get(this.updateUrl);
    // `http://localhost:3000/apis/${id}`
  };

  delete(id: any){
    return this.http.delete(this.deleteUrl);
    // `http://localhost:3000/apis/${id}`
  }


  };
