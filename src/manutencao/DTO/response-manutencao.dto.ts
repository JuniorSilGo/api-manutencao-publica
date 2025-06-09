import { Funcionario } from 'src/funcionario/funcionario.model';
import { Servico } from 'src/servico/servico.model';

export class ManutencaoResponseDto {
  id_manutencao: number;
  equipe: Funcionario[];
  servicos: Servico[];
  createdAt: Date;
  updatedAt: Date;
}
