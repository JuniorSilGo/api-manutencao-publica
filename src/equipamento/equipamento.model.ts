import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Local } from '../local/local.model'; //Eike: fazendo relacionamento
import { ForeignKey, BelongsTo } from 'sequelize-typescript'; //Eike: fazendo relacionamento(colocando FK)
import { Funcionario } from '../funcionario/funcionario.model';
import { Local } from '../local/local.model'; //Eike: fazendo relacionamento

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
