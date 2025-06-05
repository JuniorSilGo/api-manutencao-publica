import { FuncionarioModule } from './funcionario/funcionario.module';
import { ManutencaoModule } from './manutencao/manutencao.module';
import { ServicoModule } from './servico/servico.module';
// qd tiver... import { ServicoModule } from './servico/servico.module';

export const Rotas = [FuncionarioModule, ServicoModule, ManutencaoModule];
