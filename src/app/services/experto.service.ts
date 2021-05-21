import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Expertos } from '../models/expertos';
import {catchError, map, tap} from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpertoService {
//endpoint atributos
  private urlEndpoint: string = 'http://localhost:8080/api/users/';
  constructor(private http:HttpClient,private router: Router) { }

  // getExpertos(): Observable<Expertos[]> {
  //   // return of(EXPERTOS);
  //   return this.http.get<Expertos[]>(this.urlEndpoint);

  // }

  getExpertos(page: number): Observable<any> {
    return this.http.get(this.urlEndpoint + '/page/' + page).pipe(
      tap((response: any) => {
        console.log('ExpertoService: tap 1');
        (response.content as Expertos[]).forEach(experto => console.log(experto.nombre));
      }),
      map((response: any) => {
        (response.content as Expertos[]).map(experto => {
          experto.nombre = experto.nombre.toUpperCase();
          return experto;
        });
        return response;
      }),
      tap(response => {
        console.log('ClienteService: tap 2');
        (response.content as Expertos[]).forEach(experto => console.log(experto.nombre));
      }));
  }

  getExperto(id): Observable<Expertos> {
    return this.http.get<Expertos>(`${this.urlEndpoint}/${id}`).pipe(
      catchError(e => {
        if (e.status != 401 && e.error.mensaje) {
          this.router.navigate(['/experto']);
          console.error(e.error.mensaje);
        }

        return throwError(e);
      }));
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

  delete(id: number): Observable<Expertos> {
    return this.http.delete<Expertos>(`${this.urlEndpoint}/${id}`).pipe(
      catchError(e => {
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      }));
  }

}
