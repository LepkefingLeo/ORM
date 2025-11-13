import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { MyserversModule } from './myservers/myservers.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), MyserversModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
