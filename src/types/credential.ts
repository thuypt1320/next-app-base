import { IUser } from "types/user";
export interface ICredential {
  user: IUser;
  access_token: string
}
