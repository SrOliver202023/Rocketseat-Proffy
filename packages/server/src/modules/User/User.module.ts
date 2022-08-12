import { Global, Module } from '@nestjs/common';
import { PrismaService } from '../../shared/infra/database/PrismaService.service';
import { userRepositoryService } from './repositories/UserRepository.service';
import { RegisterUserModule } from './usecases/register/RegisterUser.module';
// import { userRepositoryService } from './repositories/UserRepository.service';
// import { RegisterUserModule } from './usecases/register/RegisterUser.module';

@Global()
@Module({
  imports: [RegisterUserModule],
  exports: [PrismaService, userRepositoryService],
  providers: [PrismaService, userRepositoryService],
})
export class UserModule {}
