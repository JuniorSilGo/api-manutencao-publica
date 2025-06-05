import { IsInt } from 'class-validator';

export class AtualizarIdFuncaoDto {
  @IsInt()
  id_funcao: number;
}
