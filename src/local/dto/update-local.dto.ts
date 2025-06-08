import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateLocalDto {
  @ApiPropertyOptional({
    example: 'Laboratório de Redes',
    description: 'Novo nome do local',
  })
  readonly nome?: string;

  @ApiPropertyOptional({
    example: 'Local reformado em 2024',
    description: 'Descrição adicional ou atualizada do local',
  })
  readonly descricao?: string;

  @ApiPropertyOptional({
    example: true,
    description: 'Indica se o local está ativo (true) ou inativo (false)',
  })
  readonly ativo?: boolean;
}