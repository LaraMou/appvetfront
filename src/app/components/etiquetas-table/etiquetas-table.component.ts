import { AfterViewInit, Component, DoCheck, Inject, Input, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Etiqueta } from 'src/app/models/etiqueta';
import { EtiquetaService } from 'src/app/services/etiqueta.service';
import { EliminarEtiquetaComponent } from '../eliminar-etiqueta/eliminar-etiqueta.component';

@Component({
  selector: 'app-etiquetas-table',
  templateUrl: './etiquetas-table.component.html',
  styleUrls: ['./etiquetas-table.component.scss']
})
export class EtiquetasTableComponent implements AfterViewInit ,DoCheck{
  tagSubscription: Subscription = new Subscription();
  displayedColumns: string[] = ['nombre', 'lastModifiedBy', 'createdDate','borrar'];
  dataSource: MatTableDataSource<Etiqueta>;
@Input() etiquetaList;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router,public dialog:MatDialog,private tagService: EtiquetaService) {
   // // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.etiquetaList);
  }
  ngDoCheck(): void {

    if(this.etiquetaList!=undefined){

      this.dataSource=this.etiquetaList;
    }


  }
  deleteTag(dato:any) {
    console.log(dato);
    this.tagSubscription=this.tagService.borrarEtiqueta(dato.id).subscribe(
      (response) => {

        this.router
        .navigateByUrl('/etiquetas', { skipLocationChange: true })
        .then(() => this.router.navigate(['/etiquetas']));
      },
      (error) => {

    } );

  }
  ngAfterViewInit() {
    this.dataSource.data=this.etiquetaList
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
