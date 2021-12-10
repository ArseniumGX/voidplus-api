import {
  Controller,
  Post,
  Body,
  Get,
  Headers,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CredentialsDto } from './dto/credentials.dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() data: CredentialsDto) {
    return this.authService.login(data);
  }

  @Get('is-logged')
  @UseGuards(AuthGuard('jwt'))
  logout(@Headers() headers: { authorization: string }) {
    return this.authService.isLogged(headers.authorization);
  }
}
