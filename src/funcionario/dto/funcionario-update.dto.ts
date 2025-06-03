// funcionario-update.dto.ts
import { IsString, IsEmail, IsInt, IsOptional, IsIn } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class FuncionarioUpdateDto {
  @ApiPropertyOptional({ example: 'Lady Gaga' })
  @IsOptional()
  @IsString()
  nome?: string;

  @ApiPropertyOptional({ example: 'Gaga@email.com' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @IsInt()
  id_funcao?: number;

  @ApiPropertyOptional({ example: 1, enum: [0, 1] })
  @IsOptional()
  @IsInt()
  @IsIn([0, 1])
  ativo?: number;
}
