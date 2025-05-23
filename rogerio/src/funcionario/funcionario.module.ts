import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Funcionario } from './funcionario.entity';
import { FuncionarioController } from './funcionario.controller';
import { FuncionarioService } from './funcionario.service';
import { FuncionarioRepository } from './funcionario.repository';

@Module({
  imports: [SequelizeModule.forFeature([Funcionario])],
  controllers: [FuncionarioController],
  providers: [FuncionarioService, FuncionarioRepository],
})
export class FuncionarioModule {}
