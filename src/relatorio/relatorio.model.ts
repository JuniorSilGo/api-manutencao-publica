import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
  CreatedAt,
} from 'sequelize-typescript';
import { Equipamento } from '../equipamento/equipamento.model';
import { RelatorioEquipamento } from './relatorios-equipamentos.model';

export interface RelatorioCreationAttrs {
  titulo: string;
  tipo: string;
  descricao?: string;
}

@Table({ tableName: 'relatorios' })
export class Relatorio extends Model<Relatorio, RelatorioCreationAttrs> {
  @Column({ primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column
  declare titulo: string;

  @Column
  declare tipo: string;

  @Column
  declare descricao?: string;

  @Column({ type: DataType.JSONB, allowNull: true })
  declare conteudo?: any;

  @CreatedAt
  declare dataCriacao: Date;

  @BelongsToMany(() => Equipamento, () => RelatorioEquipamento)
  declare equipamentos: Equipamento[];
}
