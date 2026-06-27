import { SequelizeModuleOptions } from '@nestjs/sequelize';
import * as dotenv from 'dotenv';
import { Funcionario } from '../funcionario/funcionario.model';
import { Funcao } from '../funcao/funcao.model';
import { Servico } from '../servico/servico.model';
import { Equipamento } from '../equipamento/equipamento.model';
import { Local } from '../local/local.model';
import { Manutencao } from '../manutencao/manutencao.model';
import { ManutencaoFuncionario } from '../manutencao-funcionario/manutencao-funcionario.model';
import { Relatorio } from '../relatorio/relatorio.model';
import { RelatorioEquipamento } from '../relatorio/relatorios-equipamentos.model';

dotenv.config();

export const DBconfig: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  models: [Funcionario, Funcao, Servico, Equipamento, Local, Manutencao, ManutencaoFuncionario, Relatorio, RelatorioEquipamento],
  autoLoadModels: false,
  synchronize: true,
};
