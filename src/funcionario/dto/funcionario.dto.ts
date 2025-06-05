import { IsString, IsEmail, IsInt, IsOptional, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FuncionarioDto {
  @ApiProperty({
    example: 'Lady Gaga',
    description: 'Nome do funcionário',
  })
  @IsString()
  nome: string;

  @ApiProperty({
    example: 'gaga@email.com',
    description: 'Endereço de email do funcionário',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 1,
    description: 'ID da função associada ao funcionário',
  })
  @IsInt()
  id_funcao: number;

  @ApiProperty({
    example: 1,
    required: false,
    enum: [0, 1],
    description: 'Status do funcionário (1 = Ativo, 0 = Inativo)',
    default: 1,
  })
  @IsOptional()
  @IsInt()
  @IsIn([0, 1])
  ativo?: number;
}
