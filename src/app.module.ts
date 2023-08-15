import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './core/database/database.module';

import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/product.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ProductsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
