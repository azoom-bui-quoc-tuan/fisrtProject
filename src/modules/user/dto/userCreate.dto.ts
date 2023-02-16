import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class userCreate {
  @IsString()
  name: string;
  @IsNumber()
  total: number;
  @IsEmail()
  email: string;
  @IsString()
  @IsOptional()
  password!: string;
}
