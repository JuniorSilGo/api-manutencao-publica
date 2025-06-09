import { PartialType } from '@nestjs/swagger';
import { CreateRelatorioDto } from './create-relatorio.dto';

export class UpdateRelatorioDto extends PartialType(CreateRelatorioDto) {}
