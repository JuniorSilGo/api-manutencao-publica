import { IsString, IsEmail, IsNotEmpty } from '@nestjs/class-validator';
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
    description: 'Endereço para qual o serviço foi solicito.',
  })
  @IsNotEmpty()
  @IsString()
  endereço: string;

  @ApiProperty({
    example: '08345-000',
    description: 'CEP para qual o serviço foi solicito.',
  })
  @IsNotEmpty()
  @IsString()
  cep: string;

  @ApiProperty({
    example: 'usuario@email.com.br',
    description: 'E-mail do usuaário que criou o pedido de serviço.',
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
}
