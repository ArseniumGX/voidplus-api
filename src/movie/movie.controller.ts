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
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { ApiTags } from '@nestjs/swagger';
import { Movies } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { get } from 'http';

@Controller('movie')
@ApiTags('Movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createMovieDto: CreateMovieDto): Promise<Movies> {
    return this.movieService.create(createMovieDto);
  }

  @Get()
  findAll(): Promise<Movies[]> {
    return this.movieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Movies> {
    return this.movieService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id') id: string,
    @Body() updateMovieDto: UpdateMovieDto
  ): Promise<Movies> {
    return this.movieService.update(id, updateMovieDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string): Promise<{ message: string }> {
    return this.movieService.remove(id);
  }

  @Get(':id/watched')
  watched(@Param('id') id: string) {
    return this.movieService.watched(id);
  }
}
