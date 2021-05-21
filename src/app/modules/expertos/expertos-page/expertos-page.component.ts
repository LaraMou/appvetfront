import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';

import { Expertos } from 'src/app/models/expertos';
import { ExpertoService } from 'src/app/services/experto.service';


@Component({
  selector: 'app-expertos-page',
  templateUrl: './expertos-page.component.html',
  styleUrls: ['./expertos-page.component.scss']
})
export class ExpertosPageComponent  {
  listaExpertos: Expertos[];


  constructor(private expertoService: ExpertoService) { }


  ngOnInit(): void {

 
  }


}
