import { Etiqueta } from "../models/etiqueta";

export interface Iexpertos {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  foto: string;
  etiquetas: Array<Etiqueta>;
}
