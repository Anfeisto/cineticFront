import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  usuario:any;
  baseUrl = 'http://127.0.0.1:8000'
  headerLogin = new HttpHeaders().set('Content-Type', 'application/json')
  optionsLogin = {headers: this.headerLogin}

  constructor(private http:HttpClient) { }
  login(data:any){
    let url = `${this.baseUrl+'/token'}`;
    let credenciales = JSON.stringify(data)
    return this.http.post(url,credenciales,this.optionsLogin).pipe(catchError(this.handleError<any>()))
  }

  private handleError<T> (result?:T){
    return (error:any): Observable<T> => {
      console.log(error.error)
      return of(result as T);
    };

  }

}
