import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Funcao } from './funcao.model';
import { FuncaoController } from './funcao.controller';
import { FuncaoService } from './funcao.service';
import { FuncaoRepository } from './funcao.repository';
import { FuncionarioModule } from '../funcionario/funcionario.module';

@Module({
  imports: [SequelizeModule.forFeature([Funcao])
        ,forwardRef(() => FuncionarioModule)
      ],
  controllers: [FuncaoController],
  providers: [FuncaoService, FuncaoRepository],
  exports: [FuncaoRepository], 

})
export class FuncaoModule {}
