import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const HELLO_API: string = 'http://localhost:8080/hello';

@Injectable()
export class HelloViewerService {

  constructor(private http: HttpClient) { }

  getHello(): any {
    return this.http.get(HELLO_API);
  }
}
