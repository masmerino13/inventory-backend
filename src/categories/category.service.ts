import { Injectable, Inject } from '@nestjs/common';

import { Category } from './category.entity';
import { CategoryDto } from './category.dto';
import { CATEGORY_REPOSITORY } from '../core/constants';

@Injectable()
export class CategoryService {
  constructor(
    @Inject(CATEGORY_REPOSITORY)
    private readonly categoryRepository: typeof Category,
  ) {}

  async create(category: CategoryDto): Promise<Category> {
    return await this.categoryRepository.create<Category>(category);
  }
}
