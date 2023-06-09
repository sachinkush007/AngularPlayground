import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private url = 'https://jsonplaceholder.typicode.com/posts/1'

  getPostsByObser(): Observable<any> {
    return this.http.get(this.url)
  }
  getPostByPromise():Promise<any>{
  return this.http.get(this.url).toPromise();
  }
}
