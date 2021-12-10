import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common';
import { CredentialsDto } from './dto/credentials.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService
  ) {}

  async login(data: CredentialsDto): Promise<{ token: string }> {
    const userExists = await this.prisma.user.findUnique({
      where: { email: data.email }
    });

    if (!userExists) throw new NotFoundException('Usuário não cadastrado!');

    const passValid = bcrypt.compare(data.password, userExists.password);

    if (!passValid) throw new UnauthorizedException('Senha inválida!');

    const payload = {
      id: userExists.id,
      email: userExists.email,
      name: userExists.name
    };

    const token = this.jwt.sign(payload);

    return { token };
  }

  isLogged(auth: string) {
    const token = auth.replace('Bearer', '').trim();
    return this.jwt.verify(token);
  }
}
