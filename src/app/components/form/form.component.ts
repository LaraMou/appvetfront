import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expertos } from 'src/app/models/expertos';
import { ExpertoService } from 'src/app/services/experto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public experto: Expertos = new Expertos();

  titulo: string = "Crear Expertos";

  errores: string[];

  constructor(private expertoService: ExpertoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log("cargadndo")
    this.activatedRoute.paramMap.subscribe(params => {
      let id = +params.get('id');
      if (id) {
        this.expertoService.getExperto(id).subscribe((experto) => this.experto = experto);
      }
    });


  }

  create(): void {
    console.log(this.experto.nombre,this.experto.apellido,this.experto.email,this.experto.createAt);
    this.expertoService.create(this.experto)
      .subscribe(
        experto => {
          this.router.navigate(['/expertos']);
          console.log("hey dear")
          Swal.fire('Nuevo experto', `El experto ${this.experto.nombre} ha sido creado con éxito`, 'success');
          console.log("hey dear")
        },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      );
  }

  update(): void {
    console.log(this.experto);
    this.experto.etiquetas = null;
    this.expertoService.update(this.experto)
      .subscribe(
        json => {
          this.router.navigate(['/expertos']);
          Swal.fire('Expertos Actualizado', `${json.mensaje}: ${json.experto.nombre}`, 'success');
        },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      )
  }

}
