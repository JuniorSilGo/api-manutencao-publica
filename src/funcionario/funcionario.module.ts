import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Funcionario } from './funcionario.model';
import { FuncionarioController } from './funcionario.controller';
import { FuncionarioService } from './funcionario.service';
import { FuncionarioRepository } from './funcionario.repository';
import { FuncaoModule } from '../funcao/funcao.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Funcionario]),
    forwardRef(() => FuncaoModule), // Dep Ciruclar
  ],
  controllers: [FuncionarioController],
  providers: [FuncionarioService, FuncionarioRepository],
  exports: [FuncionarioService, FuncionarioRepository],
})
export class FuncionarioModule {}
