import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateLocalDto {
  @ApiProperty({
    example: 'Sala 101',
    description: 'Nome do local',
  })
  readonly nome: string;

  @ApiPropertyOptional({
    example: 'Sala de informática do bloco A',
    description: 'Descrição do local',
  })
  readonly descricao?: string;
}