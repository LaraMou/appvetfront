import { Component, OnInit } from '@angular/core';
import { Etiqueta } from 'src/app/models/etiqueta';
import { EtiquetaService } from 'src/app/services/etiqueta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarea-lista',
  templateUrl: './tarea-lista.component.html',
  styleUrls: ['./tarea-lista.component.scss']
})
export class TareaListaComponent implements OnInit {
  etiquetas: Etiqueta[];
  activatedRoute: any;
  constructor(private etiquetaService: EtiquetaService) { }

  ngOnInit() {
    this.etiquetaService.getEtiquetas().subscribe(
      etiquetas => this.etiquetas = etiquetas
    )


  }


  delete(etiqueta: Etiqueta): void {
    Swal.fire({
      title: 'Está seguro?'

    }).then((result) => {
      if (result.value) {

        this.etiquetaService.delete(etiqueta.id).subscribe(
          response => {
            this.etiquetas = this.etiquetas.filter(tag => tag !== etiqueta)
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
