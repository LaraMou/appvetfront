import { Iuser } from "../interfaces/iuser";

export class User implements Iuser{
  email: string;
  password: string;

  constructor(username: string, password: string) {
    this.email = username;
    this.password = password;
  }

}
