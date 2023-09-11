import { Equivalent } from './equivalents.entity';
import { EQUIVALENTS_REPOSITORY } from '../core/constants';

export const equivalentProviders = [
  {
    provide: EQUIVALENTS_REPOSITORY,
    useValue: Equivalent,
  },
];
