import { IsOptional, IsString, IsNumber, IsEmail } from 'class-validator';

export class userUpdate {
  @IsNumber()
  id: number;
  @IsString()
  name!: string;
  @IsNumber()
  total!: number;
  @IsEmail()
  email!: string;
  @IsString()
  @IsOptional()
  password!: string;
}
