import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from '../../patterns/dtos';
import { RegisterUserService } from './RegisterUser.service';

@Controller('/register')
export class RegisterUserController {
  constructor(private registerUserService: RegisterUserService) {}

  @Post()
  async handle(@Body() userData: CreateUserDTO): Promise<object> {
    await this.registerUserService.execute(userData);
    return {
      msg: 'Cadastro concluído!',
    };
  }
}
