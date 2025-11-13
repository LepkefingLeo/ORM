import { Controller, Get, Render, Param, NotFoundException, Post, Body, Patch } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDTO } from './createuser.dto';
import { UpdateUserDTO } from './udpateuser.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return { message: this.appService.getHello() };
  }

  @Get('users')
  getUsers() {
    return this.appService.getUsers()
  }

  @Get('users/:id')
  getUser(@Param('id') id: string) {
    return this.appService.getUser(parseInt(id));
  }

  @Get('user/:id')
  async deleteUser(@Param('id') id: string) {
    try {
      return await this.appService.deleteUser(parseInt(id));
    } catch {
      throw new NotFoundException('No such user');
    }
  }

  @Post('users')
  newUser(@Body() user: CreateUserDTO){
    return this.appService.addUser(user);
  }

  @Patch('users/:id')
  async updateUser(@Body() user: UpdateUserDTO, @Param('id') id: string){
    try {
      return await this.appService.updateUser(user, parseInt(id));
    } catch {
      throw new NotFoundException('No such user');
    }
  }
}
