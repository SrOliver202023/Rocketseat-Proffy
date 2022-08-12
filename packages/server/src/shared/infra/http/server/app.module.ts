import { Module } from '@nestjs/common';
import { UserModule } from '../../../../modules/User/User.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    UserModule,
  ],
})
export class AppModule {}
