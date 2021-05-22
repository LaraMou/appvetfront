import { Etiqueta } from "../models/etiqueta";

export interface Iexpertos {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  foto: string;
  createAt: string;
  etiquetas: Array<Etiqueta>;
}
