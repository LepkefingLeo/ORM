import { Test, TestingModule } from '@nestjs/testing';
import { MyserversService } from './myservers.service';

describe('MyserversService', () => {
  let service: MyserversService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyserversService],
    }).compile();

    service = module.get<MyserversService>(MyserversService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
