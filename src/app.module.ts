import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { DBconfig } from './database/sequelize.config';

import { Rotas } from './routes.module';
import { ServicoModule } from './servico/servico.module';

import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [
    SequelizeModule.forRoot(DBconfig),
    ...Rotas, //nao entendi mas funcionou, bola pra frente
    ServicoModule, 
  ],
  providers: [JwtStrategy],
  
})
export class AppModule {}
