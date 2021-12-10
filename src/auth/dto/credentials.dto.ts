import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CredentialsDto {
  /**
   * Informe um email válido cadastrado!
   *
   * @example example@example.com
   */
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(7, 16, { message: 'A senha deve ter entre 7 e 16 caracteres' })
  password: string;
}
