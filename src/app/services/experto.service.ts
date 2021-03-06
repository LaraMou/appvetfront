import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
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
//endpoint atributos cambio a heroku
  private urlEndpoint: string = 'https://cfgs-appvet.herokuapp.com/api/users';
  // private urlEndpoint: string = 'http://localhost:8080/api/users/';
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
        console.log('ExpertosService: tap 2');
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
    console.log("entrada para crear")
    return this.http.post(this.urlEndpoint, experto)
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
    console.log("esperto"+experto)
    return this.http.put<any>(`${this.urlEndpoint}`, experto).pipe(
      catchError(e => {
        if (e.status == 400) {
          return throwError(e);
        }
        return throwError(e);
      }));
  }
  updateUserTask(experto: Expertos,id:number): Observable<any> {
    console.log("esperto"+experto)
    return this.http.put<any>(`${this.urlEndpoint}/${id}`, experto).pipe(
      catchError(e => {
        if (e.status == 400) {
          return throwError(e);
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

  subirFoto(archivo: File, id): Observable<HttpEvent<{}>> {
    let formData = new FormData();
    formData.append("archivo", archivo);
    formData.append("id", id);

    const req = new HttpRequest('POST', `${this.urlEndpoint}/upload`, formData, {
      reportProgress: true
    });

    return this.http.request(req);
  }

}
