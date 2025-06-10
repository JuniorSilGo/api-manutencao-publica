import {
  Table,
  Column,
  Model,
  ForeignKey,
} from 'sequelize-typescript';
import { Relatorio } from './relatorio.model';
import { Equipamento } from '../equipamento/equipamento.model';

@Table({
  tableName: 'relatorios_equipamentos',
  timestamps: false,
})
export class RelatorioEquipamento extends Model {
  @ForeignKey(() => Relatorio)
  @Column
  relatorioId: number;

  @ForeignKey(() => Equipamento)
  @Column
  equipamentoId: number;
}
