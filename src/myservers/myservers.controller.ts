import { Controller, Get, Post, Body, Patch, Param, NotFoundException } from '@nestjs/common';
import { MyserversService } from './myservers.service';
import { CreateMyserverDto } from './dto/create-myserver.dto';
import { UpdateMyserverDto } from './dto/update-myserver.dto';

@Controller('')
export class MyserversController {
  constructor(private readonly myserversService: MyserversService) {}

  @Post('servers')
  create(@Body() createMyserverDto: CreateMyserverDto) {
    return this.myserversService.create(createMyserverDto);
  }

  @Get('servers')
  findAll() {
    return this.myserversService.findAll();
  }

  @Get('servers/:id')
  findOne(@Param('id') id: string) {
    return this.myserversService.find(parseInt(id));
  }

  @Patch('servers/:id')
  async update(@Param('id') id: string, @Body() updateMyserverDto: UpdateMyserverDto) {
    try {
      return await this.myserversService.update(updateMyserverDto, parseInt(id));
    } catch {
      throw new NotFoundException('No such server');
    }
  }

  @Get('server/:id')
  async delete(@Param('id') id: string) {
    try {
      return await this.myserversService.remove(parseInt(id));
    } catch {
      throw new NotFoundException('No such server');
    }
  }
}
