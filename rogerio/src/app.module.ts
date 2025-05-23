import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SequelizeModule } from '@nestjs/sequelize';
import { DBconfig } from './database/sequelize.config';

import { Rotas } from './routes.module';

@Module({
  imports: [
    SequelizeModule.forRoot(DBconfig),
    ...Rotas, // modulos de entidades
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
