import { Ietiquetas } from "../interfaces/ietiquetas.interface";
import { Expertos } from "./expertos";
import { Mensaje } from "./mensaje";

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
  mensaje: Array<Mensaje> = [];

  constructor(title: string, createdDate: any) {
    this.title = title;
    this.createdDate = createdDate;
  }


}
