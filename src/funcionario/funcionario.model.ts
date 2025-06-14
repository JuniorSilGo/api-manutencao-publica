import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from 'sequelize-typescript';
import { Funcao } from '../funcao/funcao.model';
import { Manutencao } from 'src/manutencao/manutencao.model';
import { ManutencaoFuncionario } from 'src/manutencao-funcionario/manutencao-funcionario.model';

@Table({
  tableName: 'funcionarios',
  timestamps: true,
})
export class Funcionario extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id_funcionario: number;

  @Column({ type: DataType.STRING })
  nome!: string;

  @Column({ type: DataType.STRING })
  email!: string;

  @ForeignKey(() => Funcao)
  @Column({ type: DataType.INTEGER })
  id_funcao?: number;

  @BelongsTo(() => Funcao, { foreignKey: 'id_funcao', as: 'funcao' })
  funcao?: Funcao;

  @Column({ type: DataType.INTEGER, defaultValue: 1 })
  ativo!: number;

  @BelongsToMany(() => Manutencao, () => ManutencaoFuncionario) // Precisei fazer uma adição aqui
  manutencoes: Manutencao[];
}
