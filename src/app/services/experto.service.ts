import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Expertos } from '../models/expertos';
import {catchError, map} from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpertoService {
//endpoint atributos
  private urlEndpoint: string = 'http://localhost:8080/api/users';
  constructor(private http:HttpClient) { }

  getExpertos(): Observable<Expertos[]> {
    // return of(EXPERTOS);
    return this.http.get<Expertos[]>(this.urlEndpoint);

  }
  create(experto: Expertos): Observable<Expertos> {
    return this.http.put(this.urlEndpoint, experto)
      .pipe(
        map((response: any) => response.experto as Expertos),
        catchError(e => {
          if (e.status == 400) {
            return throwError(e);
          }
          if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(e);
        }));
  }
  update(experto: Expertos): Observable<any> {
    return this.http.put<any>(`${this.urlEndpoint}/${experto.id}`, experto).pipe(
      catchError(e => {
        if (e.status == 400) {
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      }));
  }

}
