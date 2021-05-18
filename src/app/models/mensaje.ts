import { Imensaje } from "../interfaces/imensaje";
import { Etiqueta } from "./etiqueta";

export class Mensaje implements Imensaje{
  id: number;
  descripcion: string;
  etiqueta: Etiqueta;

}
