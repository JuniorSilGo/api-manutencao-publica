import { Test, TestingModule } from '@nestjs/testing';
import { LocalController } from './local.controller';

describe('LocalController', () => {
  let controller: LocalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocalController],
    }).compile();

    controller = module.get<LocalController>(LocalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
