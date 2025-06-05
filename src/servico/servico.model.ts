import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Manutencao } from 'src/manutencao/manutencao.model';

@Table({
  tableName: 'servicos',
  timestamps: true,
})
export class Servico extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id_servico: number;

  @Column({ type: DataType.STRING })
  usuario?: string;

  @Column({ type: DataType.STRING })
  endereco: string;

  @Column({ type: DataType.STRING })
  cep: string;

  @Column({ type: DataType.STRING })
  email: string;

  @Column({ type: DataType.STRING })
  servico: string;

  @ForeignKey(() => Manutencao)
  @Column
  manutencaoId: number;

  @BelongsTo(() => Manutencao)
  manutencao: Manutencao;
}
