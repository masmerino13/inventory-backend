import { Module } from '@nestjs/common';
import { ProductsService } from './product.service';
import { productsProviders } from './product.provider';
import { ProductsController } from './products.controller';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ...productsProviders],
  exports: [ProductsService],
})
export class ProductsModule {}
