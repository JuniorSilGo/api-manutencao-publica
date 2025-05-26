import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({
  tableName: 'funcoes',
  timestamps: true,
})
export class Funcao extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id_funcao: number;

  @Column({ type: DataType.STRING })
  funcao?: string;

  @Column({ type: DataType.STRING })
  setor?: string;

  @Column({ type: DataType.INTEGER, defaultValue: 1 })
  ativo!: number;
}
