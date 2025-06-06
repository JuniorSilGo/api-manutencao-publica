export class FuncionarioSimplesDto {
  id: number;
  nome: string;
}

export class FuncaoComFuncionariosDto {
  id_funcao: number;
  funcao: string;
  setor: string;
  funcionarios: FuncionarioSimplesDto[];
}
