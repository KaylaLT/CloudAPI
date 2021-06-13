import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Interface } from '../interface';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  constructor(private apiService: ApiService, private http: HttpClient, private route: ActivatedRoute) { }

  results: Interface[] | null = null;

  ngOnInit(): void {

    // this.apiService.searchAPIS('animals').subscribe(results => {
    //   console.log(results)
    //   this.results = results;
    // });

    // this.apiService.getID().subscribe(results => {
    //   console.log(results)
    //   this.results = results;
    // });

    // this.apiService.getName().subscribe(results => {
    //   console.log(results)
    //   this.results = results;
    // });

    // this.apiService.postNewAPI().subscribe(results => {
    //   console.log(results)
    //   this.results = results;
    // });

    // this.apiService.update().subscribe(results => {
    //   console.log(results)
    //   this.results = results;
    // });

    // this.apiService.delete().subscribe(results => {
    //   console.log(results)
    //   this.results = results;
    // });
  }

}
