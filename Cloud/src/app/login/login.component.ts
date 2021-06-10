import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Interface } from '../interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private apiService: ApiService ) { }

  ngOnInit(): void { }
  
  results: Interface[] | null = null;

}
