import { Imensaje } from "../interfaces/imensaje";
import { Etiqueta } from "./etiqueta";

export class Mensaje implements Imensaje{
  id: number;
  description: string;
  etiqueta: Etiqueta;

}
