import { Module } from '@nestjs/common';
import { ServicoController } from './servico.controller';
import { ServicoService } from './servico.service';

@Module({
  controllers: [ServicoController],
  providers: [ServicoService]
})
export class ServicoModule {}
