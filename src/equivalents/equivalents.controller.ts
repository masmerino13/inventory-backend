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

import { EquivalentService } from './equivalent.service';

@Controller('equivalents')
export class EquivalentsController {
  constructor(private equivalentService: EquivalentService) {}

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  getDetail(@Param('id') id: string) {
    // return this.equivalentService.findOne(id);
  }
}
