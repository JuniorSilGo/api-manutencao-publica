import { Test, TestingModule } from '@nestjs/testing';
import { ManutencaoService } from './manutencao.service';

describe('ManutencaoService', () => {
  let service: ManutencaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManutencaoService],
    }).compile();

    service = module.get<ManutencaoService>(ManutencaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
