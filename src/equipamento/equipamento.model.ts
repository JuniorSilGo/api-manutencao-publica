import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({
  tableName: 'equipamentos',
  timestamps: true,
})
export class Equipamento extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id_equipamento: number;

  @Column({ type: DataType.STRING })
  nome?: string;

  @Column({ type: DataType.STRING })
  descricao?: string;

  @Column({ type: DataType.STRING })
  numero_serie?: string;

  @Column({ type: DataType.INTEGER, defaultValue: 1 })
  ativo!: number;
}
