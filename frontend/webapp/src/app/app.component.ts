import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private endpoint = 'https://bb7h4gp57i.execute-api.us-east-2.amazonaws.com/dev/poc/hello'
  public title = 'One Hundred Percent Serverless Architecture - By Bonando'
  public response = {}
  public loading = false

  constructor(private http: HttpClient) {}

  public requestAPI() {
    this.loading = true
    this.http.get('https://bb7h4gp57i.execute-api.us-east-2.amazonaws.com/dev/poc/hello').subscribe(data => {
      this.response = data
      this.loading = false
    });
  }

  public reset() {
    this.response = {}
  }
}
