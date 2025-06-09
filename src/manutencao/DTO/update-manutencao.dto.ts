import { PartialType } from '@nestjs/mapped-types';
import { CreateManutencaoDto } from './create-manutencao.dto';

export class UpdateManutencaoDto extends PartialType(CreateManutencaoDto) {}
