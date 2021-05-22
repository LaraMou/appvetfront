import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Etiqueta } from 'src/app/models/etiqueta';
import { Expertos } from 'src/app/models/expertos';
import { EtiquetaService } from 'src/app/services/etiqueta.service';
import { ExpertoService } from 'src/app/services/experto.service';
import { ModalService } from 'src/app/services/modal.service';
import Swal from 'sweetalert2';
import swal from 'sweetalert2';

@Component({
  selector: 'detalle-experto',
  templateUrl: './detalle-experto.component.html',
  styleUrls: ['./detalle-experto.component.scss']
})
export class DetalleExpertoComponent implements OnInit {
  public experto: Expertos = new Expertos();
  titulo: string = "Estas son tus tareas";
  // private fotoSeleccionada: File;
  // progreso: number = 0;
  constructor(private expertoService: ExpertoService,
    private etiquetaService: EtiquetaService,
    // private authService: AuthService,
    private activatedRoute: ActivatedRoute,
     public modalService: ModalService) { }

     ngOnInit() {
      this.activatedRoute.paramMap.subscribe(params => {
        let id = +params.get('id');
        if (id) {
          this.expertoService.getExperto(id).subscribe((experto) => this.experto = experto);
        }
      });
    }



  delete(etiqueta: Etiqueta): void {
    Swal.fire({
      title: 'Está seguro?'

    }).then((result) => {
      if (result.value) {

        this.etiquetaService.delete(etiqueta.id).subscribe(
          response => {
            this.experto.etiquetas = this.experto.etiquetas.filter(tag => tag !== etiqueta)
            Swal.fire(
              'Etiqueta Eliminada!',
              `Etiqueta ${etiqueta.title} eliminada con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }

}
