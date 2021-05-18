import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EtiquetaService } from 'src/app/services/etiqueta.service';

@Component({
  selector: 'app-eliminar-etiqueta',
  templateUrl: './eliminar-etiqueta.component.html',
  styleUrls: ['./eliminar-etiqueta.component.scss']
})
export class EliminarEtiquetaComponent implements OnInit {

  tagSubscription: Subscription = new Subscription();
  numero:any;
  tag:any;
  dataSource = new MatTableDataSource();
  constructor(private router: Router,
    private formBuilder: FormBuilder,private tagService: EtiquetaService,public dialogRef: MatDialogRef<EliminarEtiquetaComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{tag:string}
    ){}
  ngOnDestroy(): void {
    this.tagSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.tag=JSON.parse(this.data.tag)


  }

  closeDialog() {
    this.dialogRef.close();
  }


  deleteTag() {

    this.tagSubscription=this.tagService.borrarEtiqueta(this.tag.id).subscribe(
      (response) => {

        this.router
        .navigateByUrl('/etiquetas', { skipLocationChange: true })
        .then(() => this.router.navigate(['/etiquetas']));
      },
      (error) => {

    } );

  }

}

