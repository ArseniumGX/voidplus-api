import {
  Controller,
  Post,
  Body,
  Get,
  Headers,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CredentialsDto } from './dto/credentials.dto';
import AuthUser from './auth-user.decorator';
import { User } from '@prisma/client';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() data: CredentialsDto) {
    return this.authService.login(data);
  }

  @Get('profile')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  profile(@AuthUser() user: User): User {
    return user;
  }

  @Get('is-logged')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  logged(@Headers() headers: { authorization: string }) {
    return this.authService.isLogged(headers.authorization);
  }
}
