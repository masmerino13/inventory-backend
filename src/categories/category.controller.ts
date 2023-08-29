import { Controller } from '@nestjs/common';

import { CategoryService } from './category.service';

@Controller('categories')
export class CategoriesController {
  constructor(private productService: CategoryService) {}
}
