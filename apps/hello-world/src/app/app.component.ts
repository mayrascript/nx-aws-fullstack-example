import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@aws-fullstack-test/api-interfaces';

@Component({
  selector: 'aws-fullstack-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
