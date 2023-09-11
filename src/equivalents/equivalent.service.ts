import Sequelize, { Op } from 'sequelize';
import { Injectable, Inject } from '@nestjs/common';

import { Equivalent } from './equivalents.entity';
import { EquivalentDto } from './equivalent.dto';
import { PRODUCT_REPOSITORY } from '../core/constants';

@Injectable()
export class EquivalentService {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly equivalentRepository: typeof Equivalent,
  ) {}

  async create(equivalent: EquivalentDto): Promise<Equivalent> {
    return await this.equivalentRepository.create<Equivalent>(equivalent);
  }
}
