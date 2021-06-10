import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Interface } from '../interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( private apiService: ApiService ) { }

  ngOnInit(): void { }
  
  results: Interface[] | null = null;

}
