import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import AuthUser from 'src/auth/auth-user.decorator';
import { User } from '@prisma/client';

@Controller('user')
@ApiTags('Users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  remove(@Param('id') id: string): Promise<{ message: string }> {
    return this.userService.remove(id);
  }

  @Patch('watched/:id')
  @UseGuards(AuthGuard())
  watched(@AuthUser() user: User, @Param('id') movieId: string){
    return this.userService.markWatched(user, movieId)
  }

  @Patch('unwatched/:id')
  @UseGuards(AuthGuard())
  unwatched(@AuthUser() user: User, @Param('id') movieId: string){
    return this.userService.unmarkWatched(user, movieId)
  }

  @Get('watched/list')
  @UseGuards(AuthGuard())
  allWatched(@AuthUser() user: User){
    return this.userService.allWatched(user);
  }
}
