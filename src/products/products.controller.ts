import {
  Controller,
  Body,
  Post,
  Get,
  HttpCode,
  HttpStatus,
  Request,
  UseGuards,
  Query,
  Param,
} from '@nestjs/common';
import _isEmpty from 'lodash/isEmpty';

import { ProductsService } from './product.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @HttpCode(HttpStatus.OK)
  @Get('all')
  list() {
    return this.productService.showAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get('search')
  signIn(@Query() params) {
    if (params.hasOwnProperty('haystack') && params.haystack.trim() === '') {
      return [];
    }

    return this.productService.search(params.haystack);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  getDetail(@Param('id') id: string) {
    return this.productService.findOne(id);
  }
}
