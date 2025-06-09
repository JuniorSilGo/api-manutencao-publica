import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateEquipamentoDto {
  @IsString()
  nome: string;

  @IsOptional()
  @IsString()
  modelo?: string;

  @IsOptional()
  @IsString()
  numeroSerie?: string;

  @IsOptional()
  @IsBoolean()
  ativo?: boolean;

  @IsOptional()
  @IsBoolean()
  falha?: boolean;

  @IsOptional()
  @IsInt()
  responsavelId?: number;
}
