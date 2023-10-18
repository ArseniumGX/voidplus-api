import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PrismaService } from './../prisma.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { environment } from '../constants/api.constant';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: environment.SECRET_KEY
    });
  }

  async validate(payload: { email: string }) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: payload.email
      }
    });

    if (!user) throw new UnauthorizedException('Usuário não encontrado!');

    return user;
  }
}
