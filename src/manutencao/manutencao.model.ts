import {
  AutoIncrement,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Table,
  HasMany,
  BelongsToMany,
} from 'sequelize-typescript';
import { Funcionario } from 'src/funcionario/funcionario.model';
import { Servico } from 'src/servico/servico.model';
import { ManutencaoFuncionario } from 'src/manutencao-funcionario/manutencao-funcionario.model';

@Table({
  tableName: 'Manutenção',
  timestamps: true,
})
export class Manutencao extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  manutencaoId: number;

  @BelongsToMany(() => Funcionario, () => ManutencaoFuncionario)
  equipe: Funcionario[];

  @HasMany(() => Servico)
  servicos: Servico[];
}
