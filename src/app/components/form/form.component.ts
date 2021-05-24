import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etiqueta } from 'src/app/models/etiqueta';
import { Expertos } from 'src/app/models/expertos';
import { EtiquetaService } from 'src/app/services/etiqueta.service';
import { ExpertoService } from 'src/app/services/experto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public experto: Expertos = new Expertos();
  public etiqueta2: Etiqueta = new Etiqueta();

  titulo: string = "Crear Expertos";

  errores: string[];
  etiquetas: Etiqueta[];
  constructor(private expertoService: ExpertoService,
    private router: Router,
    private etiquetaService: EtiquetaService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(params => {
      let id = +params.get('id');
      if (id) {
        this.expertoService.getExperto(id).subscribe((experto) => this.experto = experto);
      }
    });
    this.etiquetaService.getEtiquetas().subscribe(
      etiquetas => this.etiquetas = etiquetas
    )

  }
  seleccionaTarea(etiqueta) {
    console.log(etiqueta.id)
    this.etiqueta2 = etiqueta;
    this.experto.etiquetas = etiqueta;
    console.log('Se ha hecho clic sobre el contacto', etiqueta);
    this.experto.etiquetas= etiqueta;
    console.log(this.experto.etiquetas)
}
  create(): void {
    console.log(this.experto.nombre,this.experto.apellido,this.experto.email,this.experto.createAt);
    // this.experto.etiquetas = null;
    this.expertoService.create(this.experto)
      .subscribe(
        experto => {
          this.router.navigate(['/expertos']);

          Swal.fire('Nuevo experto', `El experto ${this.experto.nombre} ha sido creado con éxito`, 'success');

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
    console.log("estoy actualizando"+this.experto.etiquetas)

    this.expertoService.updateUserTask(this.experto,this.etiqueta2.id)
      .subscribe(
        json => {
          this.router.navigate(['/expertos']);
          Swal.fire('Expertos Actualizado success');
        },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      )
  }

  compararEtiqueta(o1: Etiqueta, o2: Etiqueta): boolean {
    console.log("entrar aqui")
    if (o1 === undefined && o2 === undefined) {
      return true;
    }

    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false : o1.id === o2.id;
  }


}
