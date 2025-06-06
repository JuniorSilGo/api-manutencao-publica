import { IsString, IsOptional, IsInt, IsIn } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class FuncaoUpdateDto {
  @ApiPropertyOptional({ example: 'Auxiliar Técnico' })
  @IsOptional()
  @IsString()
  funcao?: string;

  @ApiPropertyOptional({ example: 'Manutenção' })
  @IsOptional()
  @IsString()
  setor?: string;

  @ApiPropertyOptional({ example: 0, enum: [0, 1] })
  @IsOptional()
  @IsInt()
  @IsIn([0, 1])
  ativo?: number;
}
