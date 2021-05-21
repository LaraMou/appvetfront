import { Etiqueta } from "../models/etiqueta";

export interface Imensaje {
  id: number;
  description: string;
  etiqueta: Etiqueta;
}
