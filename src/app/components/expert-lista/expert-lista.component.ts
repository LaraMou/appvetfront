import { Component, OnInit } from '@angular/core';
import { Expertos } from 'src/app/models/expertos';
import { ExpertoService } from 'src/app/services/experto.service';

@Component({
  selector: 'app-expert-lista',
  templateUrl: './expert-lista.component.html',
  styleUrls: ['./expert-lista.component.scss']
})
export class ExpertListaComponent implements OnInit {
  expertos: Expertos[];
  paginador: any;
  expertoSeleccionado: Expertos;

  constructor(
    private expertoService: ExpertoService,
  ) { }

  ngOnInit() {
    this.expertoService.getExpertos().subscribe(
      expertos => this.expertos = expertos
    );
  }

}
