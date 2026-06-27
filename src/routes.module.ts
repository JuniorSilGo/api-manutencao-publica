import { FuncionarioModule } from './funcionario/funcionario.module';
import { ManutencaoModule } from './manutencao/manutencao.module';
import { ServicoModule } from './servico/servico.module';
import { FuncaoModule } from './funcao/funcao.module';
import { AuthModule } from './auth/auth.module';
// qd tiver... import { ServicoModule } from './servico/servico.module';

export const Rotas = [AuthModule, FuncionarioModule, FuncaoModule, ServicoModule, ManutencaoModule];
