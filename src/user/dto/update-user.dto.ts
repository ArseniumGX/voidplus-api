import { IsString, IsNotEmpty, IsUrl, IsOptional, Length } from 'class-validator';

export class UpdateUserDto {
    /** 
     * Este campo é opcional, você pode criar agora ou depois fazendo um update.
     * Caso decida passar a informação agora, não passe como fazio, este campo necessita
     * de no mínimo 2 caractere para passar pela validação.
     * 
     * @example 'João da Neve'
     */
     @IsString()
     @IsNotEmpty()
     @IsOptional()
     @Length(2, 50)
     name?: string;
 
     /** 
      * Aqui você deve informar a url do avatar do usuário. Este campo é opciona, porém,
      * ao informá-lo, passe uma url válida.
      * 
      * @example 'https://www.google.com/google.jpg'
      */
     @IsString()
     @IsNotEmpty()
     @IsOptional()
     @IsUrl()
     avatar?: string;
}
 