import {
  ConflictException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { Movies, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MovieService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include: Prisma.MoviesInclude = {
    genders: {
      select: {
        name: true
      }
    }
  };

  async create(data: CreateMovieDto): Promise<Movies> {
    console.log(data.genders);

    const movieExists = await this.prisma.movies.findUnique({
      where: {
        title_year: {
          title: data.title,
          year: data.year
        }
      }
    });

    if (movieExists) throw new ConflictException('Filme já cadastrado!');

    const movie = await this.prisma.movies.create({ data });

    return movie;
  }

  async findAll(): Promise<Movies[]> {
    return await this.prisma.movies.findMany({
      include: this._include
    });
  }

  async findOne(id: string): Promise<Movies> {
    const movie = await this.prisma.movies.findUnique({
      where: { id },
      include: this._include
    });

    if (!movie) throw new NotFoundException('Filme não cadastrado!');

    return movie;
  }

  async update(id: string, data: UpdateMovieDto): Promise<Movies> {
    const movieExists = await this.findOne(id);

    if (!movieExists) throw new NotFoundException('Filme não encontrado!');

    const movie = await this.prisma.movies.update({
      data: {
        ...data,
        genders: {
          create: [
            {
              name: 'lkska'
            }
          ]
        }
      },
      where: { id }
    });

    return movie;
  }

  async remove(id: string): Promise<{ message: string }> {
    const movieExists = await this.findOne(id);

    if (!movieExists) throw new NotFoundException('Filme não cadastrado!');

    await this.prisma.movies.delete({
      where: { id }
    });

    return { message: 'Filme deletado com sucesso!' };
  }
}
