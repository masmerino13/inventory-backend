import Sequelize, { Op } from 'sequelize';
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

  async search(haystack: string) {
    return await this.productRepository.findAndCountAll({
      attributes: ['id', 'code', 'description', 'priceQuetzales'],
      where: {
        [Op.or]: [
          {
            description: {
              [Op.match]: Sequelize.fn(
                'to_tsquery',
                haystack
                  .split(' ')
                  .map((p) => `*${p}`)
                  .join(' | '),
              ),
            },
          },
        ],
      },
    });
  }

  async findOne(id: string) {
    const parsedId = parseInt(id, 10);

    return await this.productRepository.findByPk(parsedId);
  }
}
