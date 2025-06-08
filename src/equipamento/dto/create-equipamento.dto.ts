import { IsOptional, IsString, IsBoolean, IsInt } from 'class-validator';

export class CreateEquipamentoDto {
  @IsString()
  nome: string;

  @IsString()
  descricao: string;

  @IsOptional()
  @IsBoolean()
  ativo?: boolean;

  @IsOptional()
  @IsInt()
  id_responsavel?: number;
}
