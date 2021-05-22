import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

import { Expertos } from 'src/app/models/expertos';
import { ExpertoService } from 'src/app/services/experto.service';


@Component({
  selector: 'app-expertos-page',
  templateUrl: './expertos-page.component.html',
  styleUrls: ['./expertos-page.component.scss']
})
export class ExpertosPageComponent  {
  expertos : Expertos[];
  paginador: any;

  constructor(private expertoService: ExpertoService,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      let page: number = +params.get('page');

      if (!page) {
        console.log("page en page")
        page = 0;
      }

      this.expertoService.getExpertos(page)
        .pipe(
          tap(response => {
            console.log('ExpertosComponent: tap 3');
            (response.content as Expertos[]).forEach(experto => console.log(experto.nombre));
          })
        ).subscribe(response => {
          this.expertos = response.content as Expertos[];
          console.log("paginador")
          this.paginador = response;
        });
    });

  }


}
