import { Injectable, Inject } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductDto } from './product.dto';
import { PRODUCT_REPOSITORY } from '../core/constants';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: typeof Product,
  ) {}

  async create(product: ProductDto): Promise<Product> {
    return await this.productRepository.create<Product>(product);
  }
}
