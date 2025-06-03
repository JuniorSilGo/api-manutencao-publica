import { IsString, IsEmail, IsInt, IsOptional, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FuncionarioDto {
  @ApiProperty({ example: 'Lady Gaga' })
  @IsString()
  nome: string;

  @ApiProperty({ example: 'Gaga@email.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  id_funcao: number;

  @ApiProperty({ example: 1, required: false, enum: [0, 1] })
  @IsOptional()
  @IsInt()
  @IsIn([0, 1])
  ativo?: number;
}
