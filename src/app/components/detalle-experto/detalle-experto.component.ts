import { HttpEventType } from '@angular/common/http';
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
  @Input() experto: Expertos;

  titulo: string = "Estas son tus tareas";
  private fotoSeleccionada: File;
  progreso: number = 0;
  constructor(private expertoService: ExpertoService,
    private etiquetaService: EtiquetaService,
    // private authService: AuthService,
    private activatedRoute: ActivatedRoute,
     public modalService: ModalService) { }

  ngOnInit() {}

  seleccionarFoto(event) {
    this.fotoSeleccionada = event.target.files[0];
    this.progreso = 0;
    console.log(this.fotoSeleccionada);
    if (this.fotoSeleccionada.type.indexOf('image') < 0) {
      Swal.fire('Error seleccionar imagen: ', 'El archivo debe ser del tipo imagen', 'error');
      this.fotoSeleccionada = null;
    }
  }

  subirFoto() {

    if (!this.fotoSeleccionada) {
      Swal.fire('Error Upload: ', 'Debe seleccionar una foto', 'error');
    } else {
      this.expertoService.subirFoto(this.fotoSeleccionada, this.experto.id)
        .subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progreso = Math.round((event.loaded / event.total) * 100);
          } else if (event.type === HttpEventType.Response) {
            let response: any = event.body;
            this.experto = response.experto as Expertos;

            this.modalService.notificarUpload.emit(this.experto);
            Swal.fire('La foto se ha subido completamente!', response.mensaje, 'success');
          }
        });
    }
  }




  cerrarModal() {
    this.modalService.cerrarModal();
    this.fotoSeleccionada = null;
    this.progreso = 0;
  }

}
