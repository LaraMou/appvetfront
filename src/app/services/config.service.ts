import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  TODO // QUITAR SI ES NECESARIO
  private _data: any;

  constructor(private http: HttpClient) { }
    /**
     * devuelvo una promesa
     */
  TODO //OBSERVER,
  public getData() {
  return new Promise((resolve, reject) => {
    this.http.get('assets/config/app-config.json').subscribe(data => {
      this._data = data;
      resolve(true);
    },
    )
    });
  }
}
