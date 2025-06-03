import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { DBconfig } from './database/sequelize.config';

import { Rotas } from './routes.module';
import { ServicoModule } from './servico/servico.module';

@Module({
  imports: [
    SequelizeModule.forRoot(DBconfig),
    ...Rotas, //nao entendi mas funcionou, bola pra frente
    ServicoModule, 
  ],
})
export class AppModule {}
