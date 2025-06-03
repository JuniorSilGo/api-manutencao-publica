import { IsString, IsOptional, IsInt, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FuncaoDto {
  @ApiProperty({ example: 'Auxiliar Técnico' })
  @IsString()
  funcao: string;

  @ApiProperty({ example: 'Manutenção' })
  @IsString()
  setor: string;

  @ApiProperty({ example: 1, required: false, enum: [0, 1] })
  @IsOptional()
  @IsInt()
  @IsIn([0, 1])
  ativo?: number;
}
