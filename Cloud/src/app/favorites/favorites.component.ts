import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Interface } from '../interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor( private apiService: ApiService ) { }

  ngOnInit(): void { }
  
  results: Interface[] | null = null;

}
