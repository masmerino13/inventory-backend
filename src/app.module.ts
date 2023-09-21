import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './core/database/database.module';

import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/product.module';
import { CategoryModule } from './categories/categoryy.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ProductsModule,
    CategoryModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
