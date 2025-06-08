import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import { Local } from '../local/local.model'; //Eike: fazendo relacionamento
import { ForeignKey, BelongsTo } from 'sequelize-typescript'; //Eike: fazendo relacionamento(colocando FK)

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
  //Eike: alteração feita por mim para funcionar com o endpoint de relacionamento.

  // RELACIONAMENTO COM LOCAL:
  @ForeignKey(() => Local)
  @Column({ type: DataType.INTEGER, allowNull: false }) // Se quiser opcional, use allowNull: true
  id_local: number;

  @BelongsTo(() => Local)
  local: Local;
}
