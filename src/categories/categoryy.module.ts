import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { categoriesProviders } from './category.provider';
import { CategoriesController } from './category.controller';

@Module({
  controllers: [CategoriesController],
  providers: [CategoryService, ...categoriesProviders],
  exports: [CategoryService],
})
export class CategoryModule {}
