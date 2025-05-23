import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

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
  nome?: string;

  @Column({ type: DataType.STRING })
  email?: string;

  @Column({ type: DataType.INTEGER })
  id_funcao?: number;

  @Column({ type: DataType.INTEGER, defaultValue: 1 })
  ativo!: number;
}
