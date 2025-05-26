import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Funcionario } from './funcionario.model';
import { FuncionarioController } from './funcionario.controller';
import { FuncionarioService } from './funcionario.service';
import { FuncionarioRepository } from './funcionario.repository';
import { FuncaoModule } from '../funcao/funcao.module'; // <- importe o módulo certo

@Module({
  imports: [FuncaoModule,SequelizeModule.forFeature([Funcionario])],
  controllers: [FuncionarioController],
  providers: [FuncionarioService, FuncionarioRepository],
})
export class FuncionarioModule {}



