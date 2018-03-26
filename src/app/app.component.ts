import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Information Retrieval UI';
  query: string;
  apiUrl= 'http://localhost:8080/api/search';
  singleQueryUrl= '/singleQuery?query=';
  status: string;
  resultCount = 0;
  documents = [];

  constructor(private http: HttpClient) {
  }

  callApi() {
    if (this.query == null) {
      this.status = 'emptyQuery';
    } else {
      this.http.get(this.apiUrl + this.singleQueryUrl + this.query).subscribe(response => {
        this.status = response['searchDetails']['status'];
        this.resultCount = response['searchDetails']['resultsCount'];
        this.documents = response['searchResults'];
        console.log(this.documents);
      })
    }
  }

}
