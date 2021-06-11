import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Interface } from '../interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  constructor(private apiService: ApiService, private http: HttpClient) { }
  

  results: Interface[] | null = null;

  ngOnInit(): void {
    

    this.apiService.searchAPIS('animals').subscribe(results => {
      console.log(results)
      this.results = results;
    });
  
  }

};
