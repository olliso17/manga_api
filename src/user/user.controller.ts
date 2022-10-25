import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  createUser(@Body() createUser: User) {
    return this.userService.createUser(createUser);
  }

  @Roles(Role.Admin)
  @Post('createAdmin')
  createAdmin(@Body() createAdim: User) {
    return this.userService.createAdmin(createAdim);
  }

  @Get()
  findAllUser() {
    return this.userService.findAllUser();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: User) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
