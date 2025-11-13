import { Injectable } from '@nestjs/common';
import { CreateMyserverDto } from './dto/create-myserver.dto';
import { UpdateMyserverDto } from './dto/update-myserver.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MyserversService {
    constructor(private readonly db: PrismaService) {}

  findAll() {
    return this.db.server.findMany();
  }

  find(id: number) {
    return this.db.server.findUnique({
      where: { 
        id: id
      }
    });
  }

  create(server: CreateMyserverDto) {
    return this.db.server.create({
      data: server
    });
  }

  update(server: UpdateMyserverDto, id: number) {
    return this.db.server.update({
      where: {
        id
      },
      data: server
    });
  }

  remove(id: number) {
    return this.db.server.delete({
      where: {
        id: id
      }
    })
  }

  getHello(): string {
    return 'Hello World!';
  }
}
