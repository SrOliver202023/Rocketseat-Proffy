import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../../patterns/dtos';
import { IUserRepository } from '../../repositories/IUserRepository';

import * as Bcrypt from 'bcrypt';

@Injectable()
export class RegisterUserService {
  constructor(
    @Inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(userData: CreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.find({
      email: userData.email,
    });

    if (userAlreadyExists) {
      throw new HttpException('user already exists', HttpStatus.BAD_REQUEST);
    }

    const { email, lastName, name, password } = userData;

    const passwordEncrypted = await Bcrypt.hash(
      password,
      Number(process.env.SALT_PASSWORD),
    );

    await this.userRepository.create({
      email,
      lastName,
      name,
      password: passwordEncrypted,
    });
  }
}
