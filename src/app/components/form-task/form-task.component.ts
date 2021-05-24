import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Etiqueta } from 'src/app/models/etiqueta';
import { Expertos } from 'src/app/models/expertos';
import { Mensaje } from 'src/app/models/mensaje';
import { EtiquetaService } from 'src/app/services/etiqueta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.scss']
})
export class FormTaskComponent implements OnInit {

  public etiqueta: Etiqueta= new Etiqueta();
  mensaje: Observable<Mensaje[]>;
  titulo: string = "Crear Etiqueta";
  experto: Observable<Expertos[]>;
  errores: string[];
  constructor(
    private etiquetaService: EtiquetaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log("cargadndo")
    this.activatedRoute.paramMap.subscribe(params => {
      let id = +params.get('id');
      if (id) {
        this.etiquetaService.getEtiqueta(id).subscribe((etiqueta) => this.etiqueta = etiqueta);
      }
    });


  }

  create(): void {

    this.etiquetaService.create(this.etiqueta)
      .subscribe(
        etiqueta => {
          this.router.navigate(['/expertos']);

          Swal.fire('Nuevo etiqueta', `El etiqueta ${this.etiqueta.title} ha sido creado con éxito`, 'success');

        },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      );
  }

  update(): void {
    console.log(this.etiqueta);
    this.etiqueta.experto = null;
    this.etiquetaService.update(this.etiqueta)
      .subscribe(
        json => {
          this.router.navigate(['/etiquetas']);
          Swal.fire('Etiquetas Actualizado', `${json.mensaje}: ${json.etiqueta.title}`, 'success');
        },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      )
  }

}

