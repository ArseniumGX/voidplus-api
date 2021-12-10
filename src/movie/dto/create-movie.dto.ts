import { Type } from 'class-transformer';
import {
  IsString,
  IsNumber,
  IsUrl,
  IsArray,
  IsOptional,
  IsNotEmpty,
  Length,
  ArrayNotEmpty
} from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  title: string;

  @IsString()
  @IsOptional()
  @IsUrl()
  @IsNotEmpty()
  cover?: string;

  @IsString()
  @IsOptional()
  @Length(12, 150)
  @IsNotEmpty()
  description?: string;

  @IsNumber()
  @IsNotEmpty()
  year: number;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @Length(2, 8)
  duration?: string;

  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  rating?: number;

  @IsString()
  @IsOptional()
  @IsUrl()
  @IsNotEmpty()
  trailer?: string;

  @Type(() => CreateMovieDto)
  @IsArray()
  @ArrayNotEmpty()
  genders: CreateMovieDto[];
}
