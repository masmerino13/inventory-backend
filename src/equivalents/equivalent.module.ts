import { Module } from '@nestjs/common';
import { EquivalentService } from './equivalent.service';
import { equivalentProviders } from './equivalent.provider';
import { EquivalentsController } from './equivalents.controller';

@Module({
  controllers: [EquivalentsController],
  providers: [EquivalentService, ...equivalentProviders],
  exports: [EquivalentService],
})
export class EquivalentsModule {}
