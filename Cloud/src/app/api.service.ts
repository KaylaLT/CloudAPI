import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = 'http://localhost:3000/apis';
  idUrl: string = 'http://localhost:3000/apis/:id';
  categoryUrl: string = 'http://localhost:3000/apis/?=category';
  updateUrl: string = 'http://localhost:3000/apis/:id';
  postUrl: string = 'http://localhost:3000/apis';
  deleteUrl: string = 'http://localhost:3000/apis/:id';

  
  constructor(private http: HttpClient) {}


  searchAPIS(search: any | null) {
    let searchDatabase = {
      
    }
      
  }



  getID(id: number){
    return this.http.get(this.idUrl);
    // `http://localhost:3000/apis/${id}`
  };


  getCategory(category: string){
    return this.http.get(this.categoryUrl);
    // 'http://localhost:3000/apis/?=category'
  };


  postNewAPI(){
    return this.http.get(this.postUrl);
    // 'http://localhost:3000/apis'
  };


  update(id: number){
    return this.http.get(this.updateUrl);
    // `http://localhost:3000/apis/${id}`
  };


  delete(id: number){
    return this.http.delete(this.deleteUrl);
    // `http://localhost:3000/apis/${id}`
  }


  };
