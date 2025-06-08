import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Funcionario } from '../funcionario/funcionario.model';

@Table({ tableName: 'equipamentos' })
export class Equipamento extends Model<Equipamento> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nome: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  tipo: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  ativo: boolean;

  @ForeignKey(() => Funcionario)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    field: 'id_responsavel',
  })
  id_responsavel: number;

  @BelongsTo(() => Funcionario, 'id_responsavel')
  responsavel: Funcionario;
}
