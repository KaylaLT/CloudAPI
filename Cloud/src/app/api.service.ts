import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = 'http://localhost:3000/apis/:id';
  categoryUrl: string = 'http://localhost:3000/apis/?=category';
  updateUrl: string = 'http://localhost:3000/apis';
  postUrl: string = 'http://localhost:3000/apis';
  DeleteUrl: string = 'http://localhost:3000/apis';

  
  constructor(private http: HttpClient) {}




  getID(id: number){
    return this.http.get(`http://localhost:3000/apis/${id}`);
  };

  getCategory(){
    return this.http.get('http://localhost:3000/apis');
  };

  postNewAPI(){
    return this.http.get('http://localhost:3000/apis');
  };

  Update(id: any){
    return this.http.get(`http://localhost:3000/apis/${id}`);
  };

  Delete(id: any){
    return this.http.delete(`http://localhost:3000/apis/${id}`);
  }


  };
