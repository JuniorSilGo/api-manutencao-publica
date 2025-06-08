import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Funcionario } from '../funcionario/funcionario.model';

@Table({ timestamps: true, paranoid: true })
export class Equipamento extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nome: string;

  @Column(DataType.STRING)
  modelo: string;

  @Column(DataType.STRING)
  numeroSerie: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  ativo: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  falha: boolean;

  @ForeignKey(() => Funcionario)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  responsavelId: number;

  @BelongsTo(() => Funcionario, 'responsavelId')
  responsavel: Funcionario;
}
