import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Funcao } from './funcao.model';
import { Funcionario } from '../funcionario/funcionario.model'; 

import { FuncaoController } from './funcao.controller';
import { FuncaoService } from './funcao.service';
import { FuncaoRepository } from './funcao.repository';

import { FuncionarioModule } from '../funcionario/funcionario.module';
import { ServicoModule } from '../servico/servico.module';


@Module({
  imports: [
    SequelizeModule.forFeature([Funcao, Funcionario]),
    forwardRef(() => ServicoModule), 
    forwardRef(() => FuncionarioModule),
  ],
  controllers: [FuncaoController],
  providers: [FuncaoService, FuncaoRepository],
  exports: [FuncaoRepository],
})
export class FuncaoModule {}
