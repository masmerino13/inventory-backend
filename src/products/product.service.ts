import Sequelize, { Op } from 'sequelize';
import { Injectable, Inject } from '@nestjs/common';

import { Product } from './product.entity';
import { ProductDto } from './product.dto';
import { PRODUCT_REPOSITORY } from '../core/constants';
import { Category } from 'src/categories/category.entity';
import { Equivalent } from 'src/equivalents/equivalents.entity';

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

    return await this.productRepository.findOne({
      where: {
        id: parsedId,
      },
      include: [
        {
          model: Category,
          attributes: ['id', 'name'],
        },
        {
          model: Equivalent,
          attributes: ['equivalentCode', 'equivalentVendor'],
        },
      ],
    });
  }
}
