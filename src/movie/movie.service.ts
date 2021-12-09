import { Injectable, NotFoundException } from '@nestjs/common';
import { Movies } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MovieService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateMovieDto): Promise<Movies> {
    const movie = await this.prisma.movies.create({ data });
    
    return movie;
  }

  async findAll(): Promise<Movies[]> {
    return await this.prisma.movies.findMany();
  }

  async findOne(id: string): Promise<Movies> {
    const movie = await this.prisma.movies.findUnique({
      where: { id }
    });

    return movie;
  }

  async update(id: string, data: UpdateMovieDto): Promise<Movies> {
    const movieExists = await this.findOne(id);

    if(!movieExists) throw new NotFoundException('Filme não encontrado!');

    const movie = await this.prisma.movies.update({
      data,
      where: { id }
    });

    return movie;
  }

  async remove(id: string): Promise<{ message: string }> {
    await this.prisma.movies.delete({
      where: { id }
    });

    return { message: 'Filme deletado com sucesso!' };
  }
}
