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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
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
  @ApiBearerAuth()
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  remove(@Param('id') id: string): Promise<{ message: string }> {
    return this.userService.remove(id);
  }

  @Patch('watched/:id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  watched(@AuthUser() user: User, @Param('id') movieId: string) {
    return this.userService.markWatched(user, movieId);
  }

  @Patch('unwatched/:id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  unwatched(@AuthUser() user: User, @Param('id') movieId: string) {
    return this.userService.unmarkWatched(user, movieId);
  }

  @Get('watched/list')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  allWatched(@AuthUser() user: User) {
    return this.userService.allWatched(user);
  }
}
