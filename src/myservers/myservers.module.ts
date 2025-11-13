import { Module } from '@nestjs/common';
import { MyserversService } from './myservers.service';
import { MyserversController } from './myservers.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MyserversController],
  providers: [MyserversService, PrismaService],
})
export class MyserversModule {}
