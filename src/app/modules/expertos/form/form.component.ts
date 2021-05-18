import { Component, OnInit } from '@angular/core';
import { Expertos } from 'src/app/models/expertos';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  public experto: Expertos = new Expertos();
  public titulo:string = "crear experto"

  constructor() { }

  ngOnInit(): void {
  }

  public create(): void{
    console.log("clicked");
    console.log(this.experto);
  }

}
