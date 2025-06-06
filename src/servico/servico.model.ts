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
import { Funcionario } from 'src/funcionario/funcionario.model';
import { Funcao } from 'src/funcao/funcao.model';

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

  @ForeignKey(() => Funcionario)
  @Column({ type: DataType.INTEGER })
  id_funcionario: number; // rafa passou aqui

  @BelongsTo(() => Funcionario)
  funcionario: Funcionario;

  @ForeignKey(() => Funcao)
  @Column({ type: DataType.INTEGER })
  id_funcao: number; // rafa passou aqui

  @BelongsTo(() => Funcao)
  funcao: Funcao;

  @ForeignKey(() => Manutencao)
  @Column({ type: DataType.INTEGER })
  manutencaoId: number;

  @BelongsTo(() => Manutencao)
  manutencao: Manutencao;
}
