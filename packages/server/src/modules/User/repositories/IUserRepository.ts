import { User } from '@prisma/client';
import { FindUserDAO } from '../patterns/daos';
import { CreateUserDTO } from '../patterns/dtos';

export interface IUserRepository {
  create(userData: CreateUserDTO): Promise<void>;
  find(userData: FindUserDAO): Promise<User>;
}
