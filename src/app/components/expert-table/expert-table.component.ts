import {AfterViewInit, Component, DoCheck, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Expertos } from 'src/app/models/expertos';

@Component({
  selector: 'app-expert-table',
  templateUrl: './expert-table.component.html',
  styleUrls: ['./expert-table.component.scss']
})
export class ExpertTableComponent implements AfterViewInit , OnInit, DoCheck {

  displayedColumns = ['nombre', 'estado','etiquetas', 'puntuacion'];
  dataSource:MatTableDataSource<Expertos>;
@Input() expertList;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {}
  ngDoCheck(): void {

    if(this.expertList!=undefined){

      this.dataSource=this.expertList;
    }


  }
  ngOnInit(): void {
    console.log("----------------------")
    console.log(this.expertList)
    console.log("----------------------")
  }



  ngAfterViewInit() {

    this.dataSource = new MatTableDataSource(this.expertList);
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

