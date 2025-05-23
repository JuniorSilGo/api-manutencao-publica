import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize';
import { DBconfig } from './database/sequelize.config';

import { Rotas } from './routes.module';

@Module({
  imports: [
    SequelizeModule.forRoot(DBconfig),
    ...Rotas, // modulos de entidades
  ]
})
export class AppModule {}
