export interface User {
  readonly id?: number | string;
  readonly name?: string;
  readonly email?: string;
  readonly access_token?:string;
}
