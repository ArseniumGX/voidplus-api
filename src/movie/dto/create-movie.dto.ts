import { IsString, IsNumber, IsUrl, IsArray, IsOptional, IsNotEmpty, Length } from 'class-validator';

export class CreateMovieDto {
    @IsString()
    @IsNotEmpty()
    @Length(1, 50)
    title: string;
    
    cover?: string;
    description?: string;
    year?: number;
    duration?: string;
    rating: number;
    genders?: string[];
    actors?: string[];
    trailer?: string;
    producers?: string[];
}
