import { Injectable, Provider } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../../../shared/infra/database/PrismaService.service';
import { FindUserDAO } from '../patterns/daos';
import { CreateUserDTO } from '../patterns/dtos';
import { IUserRepository } from './IUserRepository';

@Injectable()
export class UserRepository implements IUserRepository {
  private userDB: Prisma.UserDelegate<
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >;

  constructor(private prismaService: PrismaService) {
    this.userDB = this.prismaService.user;
  }

  async create(userData: CreateUserDTO): Promise<void> {
    await this.userDB.create({ data: userData });
  }

  async find(userData: FindUserDAO): Promise<User> {
    const { id, email } = userData;
    const user = await this.userDB.findFirst({
      where: { OR: [{ id, email }] },
    });
    return user;
  }
}

export const userRepositoryService: Provider = {
  provide: 'UserRepository',
  useClass: UserRepository,
};
