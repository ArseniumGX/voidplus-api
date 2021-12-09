import { ConflictException, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateUserDto): Promise<User> {
    if(data.password !== data.rePassword) throw new NotAcceptableException('Senhas não conferem.');

    delete data.rePassword;

    const emailExists = await this.prisma.user.findUnique({
      where: {
        email: data.email
      }
    });

    if(emailExists) throw new ConflictException('Email já cadastrado!');

    const salt = 10;
    const hashPassword = await bcrypt.hash(data.password, salt)

    const user = await this.prisma.user.create({ 
      data: {
        ...data,
        password: hashPassword
      } 
    });

    delete user.password;

    return user;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id }
    });

    if(!user) throw new NotFoundException('Usuário não cadastrado!');

    delete user.password;

    return user;
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    const userExists = await this.prisma.user.findUnique({
      where: { id }
    });

    if(!userExists) throw new NotFoundException('Usuário não cadastrado!');

    const user = await this.prisma.user.update({
      data,
      where: { id }
    });

    delete user.password;

    return user;
  }

   async remove(id: string): Promise<{ message: string }> {
    const userExists = await this.prisma.user.findUnique({
      where: { id }
    });

    if(!userExists) throw new NotFoundException('Usuário não cadastrado!');

    await this.prisma.user.delete({
      where: { id }
    });

    return { message: 'Usuário deletado com sucesso!' };
  }
}
