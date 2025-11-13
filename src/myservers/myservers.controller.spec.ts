import { Test, TestingModule } from '@nestjs/testing';
import { MyserversController } from './myservers.controller';
import { MyserversService } from './myservers.service';

describe('MyserversController', () => {
  let controller: MyserversController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyserversController],
      providers: [MyserversService],
    }).compile();

    controller = module.get<MyserversController>(MyserversController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
