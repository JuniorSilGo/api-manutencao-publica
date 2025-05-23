import { Test, TestingModule } from '@nestjs/testing';
import { ServicoController } from './servico.controller';

describe('ServicoController', () => {
  let controller: ServicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicoController],
    }).compile();

    controller = module.get<ServicoController>(ServicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
