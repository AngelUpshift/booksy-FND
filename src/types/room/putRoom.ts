import { IDesk } from "../desk/desk";
import { IImage } from "./room";

export interface IRoomPutRoom {
  id: string; /// params
  name: string;
  description: string;
  images: IImage[];
  desks: IDesk[];
  type: number;
}
