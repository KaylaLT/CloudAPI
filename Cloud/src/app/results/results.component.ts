import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  api: Observable<any> | any | null = null;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }


  ngOnInit(): void {

    this.route.params.subscribe((param) => {
      this.apiService.searchAPIS(param.category).subscribe((response) => {
        this.api = response;
        console.log(response);
      });

    }
    )}
};
