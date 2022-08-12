import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export abstract class CreateUserDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;
}
