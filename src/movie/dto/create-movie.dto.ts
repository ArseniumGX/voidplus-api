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
  /**
   * Informe aqui o título do filme. Este campo é obrigatório e so é possível
   * cadastrar um filme que com mesmo nome desde o ano seja diferente. Campo
   * deve ser preenchido com no mínimo 1 caracter e no máximo 50.
   *
   * @example Matrix Ressurection
   */
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  title: string;

  /**
   * Campo é opcional e deve conter uma url válida para ser validado.
   *
   * @example https://www.matrix.com/matrix.jpg
   */
  @IsString()
  @IsOptional()
  @IsUrl()
  @IsNotEmpty()
  poster?: string;

  /**
   * Campo opcional, deve ser preenchido com no mínimo 12 caractere e no máximo
   * 150 para ser validado.
   *
   * @example Em um mundo futurista humanos e máquinas estão em guerra.
   */
  @IsString()
  @IsOptional()
  @Length(12, 150)
  @IsNotEmpty()
  synopsis?: string;

  /**
   * Este campo é obrigatório, deve ser preenchido com um número de 4
   * caracteres representando o ano de lançamento do filme.
   *
   * @example 1999
   */
  @IsNumber()
  @IsNotEmpty()
  year: number;

  /**
   * Este campo pe opcional, deve ser preenchido com o tempo de duração do
   * filme. Necessário no mínimo 2 caracteres e no máximo 8 para ser validado.
   * Segue os exemplos de como é possível informar
   *
   * @example ''60s' or '2h 40m''
   */
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @Length(2, 8)
  duration?: string;

  /**
   * Informe aqui a pontuação IMDB do filme. Passe apenas números. Campo opcional,
   * não é necessário informa caso não deseje.
   *
   * @example 10.0 or 10
   */
  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  rating?: number;

  /**
   * Informe a url do trailer do filme. É necessário que seja passado uma url
   * válida para que seja validado. Campo é opcional, pode ser preenchido depois.
   *
   * @example https://www.youtube.com/video?id=s1244jd
   */
  @IsString()
  @IsOptional()
  @IsUrl()
  @IsNotEmpty()
  trailer?: string;

  /**
   * Informe aqui o/os gêneros do filme dentro de um array. Este campo é opcional.
   * Posteriormente será implementado da forma correta.
   *
   * @example ["Ação", "Ficção"]
   */
  @IsArray()
  @ArrayNotEmpty()
  @IsOptional()
  genres: string[];

  /**
   * Informe aqui o/os atores do filme dentro de um array. Este campo é opcional.
   * Posteriormente será implementado da forma correta.
   *
   * @example ["Keanu Reeves", "Carrie-Ann Moss"]
   */
  @IsArray()
  @ArrayNotEmpty()
  @IsOptional()
  actors: string[];

  /**
   * Informe aqui a/as produtoras do filme dentro de um array. Este campo é opcional.
   * Posteriormente será implementado da forma correta.
   *
   * @example ["Village Roadshow Pictures", "Venus Castina Productions"]
   */
  @IsArray()
  @ArrayNotEmpty()
  @IsOptional()
  producer: string[];
}
