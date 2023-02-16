import { IsNumber, IsString } from 'class-validator';

export default class User {
  id: string;
  name: string;
  age: number;
  email: string;
}
