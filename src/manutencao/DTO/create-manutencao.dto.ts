import { IsArray, IsInt } from 'class-validator';

export class CreateManutencaoDto {
  @IsArray()
  @IsInt({ each: true })
  funcionarioIds: number[];

  @IsArray()
  @IsInt({ each: true })
  servicoIds: number[];
}
