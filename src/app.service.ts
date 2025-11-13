import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateUserDTO } from './createuser.dto';
import { UpdateUserDTO } from './udpateuser.dto';

@Injectable()
export class AppService {
  constructor(private readonly db: PrismaService) {}
  
  getUsers() {
    return this.db.user.findMany();
  }

  getUser(id: number) {
    return this.db.user.findUnique({
      where: { 
        id: id
      }
    });
  }

  deleteUser(id: number) {
    return this.db.user.delete({
      where: {
        id: id
      }
    });
  }

  addUser(user: CreateUserDTO) {
    return this.db.user.create({
      data: user
    });
  }

  updateUser(user: UpdateUserDTO, id: number) {
    return this.db.user.update({
      where: {
        id
      },
      data: user
    });
  }
  
  getHello(): string {
    return 'Hello World!';
  }
}
