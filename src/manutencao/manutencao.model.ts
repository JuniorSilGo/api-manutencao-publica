import {
  AutoIncrement,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Table,
  HasMany,
} from 'sequelize-typescript';
import { Funcionario } from 'src/funcionario/funcionario.model';
import { Servico } from 'src/servico/servico.model';

@Table({
  tableName: 'Manutenção',
  timestamps: true,
})
export class Manutencao extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id_manutencao: number;

  @HasMany(() => Servico)
  servicos: Servico[];

  @Column({ type: DataType.STRING })
  equipe: Funcionario[];
}
