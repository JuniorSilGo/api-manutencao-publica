import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { DBconfig } from './database/sequelize.config';

import { Rotas } from './routes.module';

import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [
    SequelizeModule.forRoot(DBconfig),
    ...Rotas, // modulos de entidades
  ],
  providers: [JwtStrategy],
  
})
export class AppModule {}
