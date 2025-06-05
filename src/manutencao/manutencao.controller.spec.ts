import { Test, TestingModule } from '@nestjs/testing';
import { ManutencaoController } from './manutencao.controller';

describe('ManutencaoController', () => {
  let controller: ManutencaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManutencaoController],
    }).compile();

    controller = module.get<ManutencaoController>(ManutencaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
