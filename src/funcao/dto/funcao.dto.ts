import { IsString, IsOptional, IsInt, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FuncaoDto {
  @ApiProperty({
    example: 'Cantor',
    description: 'Nome da função',
  })
  @IsString()
  funcao: string;

  @ApiProperty({
    example: 'Manutenção',
    description: 'Setor de atuação da função',
  })
  @IsString()
  setor: string;

  @ApiProperty({
    example: 1,
    required: false,
    enum: [0, 1],
    description: 'Status da função (1 = Ativa, 0 = Inativa)',
    default: 1,
  })
  @IsOptional()
  @IsInt()
  @IsIn([0, 1])
  ativo?: number;
}
