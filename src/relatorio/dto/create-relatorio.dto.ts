import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsOptional,
} from 'class-validator';

export class CreateRelatorioDto {
  @ApiProperty({ example: 'Relatório de Equipamentos Ativos' })
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @ApiProperty({ example: 'ativos', description: 'Tipo do relatório' })
  @IsString()
  @IsNotEmpty()
  tipo: string;

  @ApiProperty({ example: 'Este relatório mostra os equipamentos ativos.' })
  @IsOptional()
  @IsString()
  descricao?: string;
}
