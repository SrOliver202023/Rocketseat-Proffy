import { Module } from '@nestjs/common';
import { RegisterUserController } from './RegisterUser.controller';
import { RegisterUserService } from './RegisterUser.service';

@Module({
  controllers: [RegisterUserController],
  providers: [RegisterUserService],
})
export class RegisterUserModule {}
