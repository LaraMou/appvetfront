import { Etiqueta } from "../models/etiqueta";

export interface Imensaje {
  id: number;
  descripcion: string;
  etiqueta: Etiqueta;
}
