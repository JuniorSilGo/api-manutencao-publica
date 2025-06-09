import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { DBconfig } from './database/sequelize.config';

import { Rotas } from './routes.module';
import { ServicoModule } from './servico/servico.module';
import { EquipamentoModule } from './equipamento/equipamento.module';
import { JwtStrategy } from './auth/jwt.strategy';
import { RelatorioModule } from './relatorio/relatorio.module';


@Module({
  imports: [
    SequelizeModule.forRoot(DBconfig),
    ...Rotas,
    ServicoModule,
    EquipamentoModule,
    RelatorioModule,
  ],
  providers: [JwtStrategy],
})
export class AppModule {}
