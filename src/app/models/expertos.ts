import { Iexpertos } from "../interfaces/iexpertos.interface";
import { Etiqueta } from "./etiqueta";


export class Expertos implements Iexpertos{
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  disponibilidad: string;
  foto: string;
  etiquetas: Array<Etiqueta>=[];




}

