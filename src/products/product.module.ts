import { Module } from '@nestjs/common';
import { ProductsService } from './product.service';
import { productsProviders } from './product.provider';

@Module({
  providers: [ProductsService, ...productsProviders],
  exports: [ProductsService],
})
export class ProductsModule {}
