import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpStatus,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { UsersDTO } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createUser(@Body() data: UsersDTO) {
     const user = await this.usersService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User created successfully',
      user
    };
  }

  @Get(':id')
  async readUser(@Param('id') id: number) {
    const data =  await this.usersService.read(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'User fetched successfully',
      data,
    };
  }

  @Get()
  async readAllUsers() {
    const users =  await this.usersService.readAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Users fetched successfully',
      users
    };
  }

  @Patch(':id')
  async uppdateUser(@Param('id') id: number, @Body() data: Partial<UsersDTO>) {
    await this.usersService.update(id, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User updated successfully',
    };
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.usersService.delete(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }
}