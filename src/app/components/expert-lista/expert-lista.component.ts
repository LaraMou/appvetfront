import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Expertos } from 'src/app/models/expertos';
import { AuthService } from 'src/app/services/auth.service';
import { URL_BACKEND } from 'src/app/services/config.service';
import { ExpertoService } from 'src/app/services/experto.service';
import { ModalService } from 'src/app/services/modal.service';
import Swal from 'sweetalert2';
import swal from 'sweetalert2';

@Component({
  selector: 'app-expert-lista',
  templateUrl: './expert-lista.component.html',
  styleUrls: ['./expert-lista.component.scss']
})
export class ExpertListaComponent implements OnInit {
  expertos: Expertos[];
  paginador: any;
  expertoSeleccionado: Expertos;
  urlBackend: string = URL_BACKEND;
  constructor(
    private expertoService: ExpertoService,
    public modalService: ModalService,
    public authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.expertoService.g().subscribe(//TODO MIA
    //   expertos => this.expertos = expertos
    // );

    this.activatedRoute.paramMap.subscribe(params => {
      let page: number = +params.get('page');

      if (!page) {
        page = 0;
      }

      this.expertoService.getExpertos(page)
        .pipe(
          tap(response => {
            console.log('ClientesComponent: tap 3');
            (response.content as Expertos[]).forEach(experto => console.log(experto.nombre));
          })
        ).subscribe(response => {
          this.expertos = response.content as Expertos[];
          this.paginador = response;
        });
    });

    this.modalService.notificarUpload.subscribe(experto => {
      this.expertos = this.expertos.map(expertoOriginal => {
        if (experto.id == expertoOriginal.id) {
          expertoOriginal.foto = experto.foto;
        }
        return expertoOriginal;
      })
    })
  }

  delete(experto: Expertos): void {
    Swal.fire({
      title: 'Está seguro?'

    }).then((result) => {
      if (result.value) {

        this.expertoService.delete(experto.id).subscribe(
          () => {
            this.expertos = this.expertos.filter(exp => exp !== experto)
            Swal.fire(
              'Expertos Eliminado!',
              `Expertos ${experto.nombre} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    });
  }

  abrirModal(experto: Expertos) {
    this.expertoSeleccionado = experto;
    this.modalService.abrirModal();
  }


}
