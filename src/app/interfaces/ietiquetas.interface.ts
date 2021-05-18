import { Expertos } from "../models/expertos";

export interface Ietiquetas {
  id: number;
  title: string;
  description: string;
  finish: boolean;
  estado: string;
  motivo: string;
  lastModifiedBy: string;
  createdDate: any;
  deliverDate: any;
  experto: Array<Expertos>;
}
