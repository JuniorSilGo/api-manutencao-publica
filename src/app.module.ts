import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { DBconfig } from './database/sequelize.config';

import { Rotas } from './routes.module';
import { ServicoModule } from './servico/servico.module';
import { EquipamentoModule } from './equipamento/equipamento.module';
import { JwtStrategy } from './auth/jwt.strategy';
import { LocalModule } from './local/local.module';
import { LocalModule } from './local/local.module';

@Module({
  imports: [
    SequelizeModule.forRoot(DBconfig),
    ...Rotas,
    ServicoModule,
    EquipamentoModule,
    LocalModule,
  ],
  providers: [JwtStrategy],
})
export class AppModule {}
