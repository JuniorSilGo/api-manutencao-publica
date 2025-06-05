import { SequelizeModuleOptions } from '@nestjs/sequelize';
import * as dotenv from 'dotenv';

dotenv.config();

export const DBconfig: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  autoLoadModels: true,
  synchronize: true,
};
