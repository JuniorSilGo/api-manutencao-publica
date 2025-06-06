import { IsString, IsEmail, IsNotEmpty, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateServicoDto {
  @ApiProperty({
    example: 'Usuario',
    description: 'Nome do usuário que solicita o serviço.',
  })
  @IsNotEmpty()
  @IsString()
  usuario: string;

  @ApiProperty({
    example: 'Tv. Nave Mãe - Jardim da Conquista - SP',
    description: 'Endereço para o qual o serviço foi solicitado.',
  })
  @IsNotEmpty()
  @IsString()
  endereco: string; 

  @ApiProperty({
    example: '08345-000',
    description: 'CEP para o qual o serviço foi solicitado.',
  })
  @IsNotEmpty()
  @IsString()
  cep: string;

  @ApiProperty({
    example: 'usuario@email.com.br',
    description: 'E-mail do usuário que criou o pedido de serviço.',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'Poda de galhos de árvore.',
    description: 'Campo para selecionar o tipo de serviço desejado.',
  })
  @IsString()
  servico: string;

  @ApiProperty({
    example: 1,
    description: 'ID do funcionário.',
  })
  @IsInt()
  @IsNotEmpty()
  id_funcionario: number;  //RAFA PASSOU AQUI

  @ApiProperty({
    example: 2,
    description: 'ID da função.',
  })
  @IsInt()
  @IsNotEmpty()
  id_funcao: number; //RAFA PASSOU AQUI
}
