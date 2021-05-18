import { Component, OnInit,ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { EtiquetaService } from 'src/app/services/etiqueta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Etiqueta } from 'src/app/models/etiqueta';
import swal from 'sweetalert2';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Expertos } from 'src/app/models/expertos';

@Component({
  selector: 'app-add-tarea',
  templateUrl: './add-tarea.component.html',
  styleUrls: ['./add-tarea.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddTareaComponent  {
  public etiqueta: Etiqueta = new Etiqueta("",new Date());
  titulo: string = "Crear Etiqueta";
  errores: string[];
  constructor(private etiquetaService: EtiquetaService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = +params.get('id');
      if (id) {
        this.etiquetaService.getEtiqueta(id).subscribe((etiqueta) => this.etiqueta = etiqueta);
      }
    });
  }
  create(): void {
    console.log(this.etiqueta);
    this.etiquetaService.create(this.etiqueta)
      .subscribe(
        etiqueta => {
          this.router.navigate(['/etiquetas']);
          swal.fire ('Nueva Etiqueta', `La etiqueta ${etiqueta.title} ha sido creada con éxito`, 'success');
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
          swal.fire('Etiqueta Actualizada', `${json.mensaje}: ${json.etiqueta.nombre}`, 'success');
        },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      )
  }
}

