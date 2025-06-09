import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Manutencao } from 'src/manutencao/manutencao.model';
import { Funcionario } from 'src/funcionario/funcionario.model';

@Table({
  tableName: 'manutencao_funcionario',
  timestamps: false,
})
export class ManutencaoFuncionario extends Model {
  @ForeignKey(() => Manutencao)
  @Column
  manutencaoId: number;

  @ForeignKey(() => Funcionario)
  @Column
  funcionarioId: number;
}
