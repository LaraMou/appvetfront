import { Ietiquetas } from "../interfaces/ietiquetas.interface";
import { Expertos } from "./expertos";

export class Etiqueta implements Ietiquetas {
  id: number;
  title: string;
  description: string;
  finish: boolean;
  estado: string;
  motivo: string;
  lastModifiedBy: string;
  createdDate: any;
  deliverDate: any;
  experto: Array<Expertos> = [];

  constructor(title: string, createdDate: any) {
    this.title = title;
    this.createdDate = createdDate;
  }


}
