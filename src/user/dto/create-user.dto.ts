import { IsString, IsNotEmpty, IsUrl, IsEmail, IsOptional, Length } from 'class-validator';

export class CreateUserDto{

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

    /** 
     * Campo obrigatório, o email informado deve ser único não podendo, dessa forma, conflitar
     * com um email já cadastrado no banco de dados. O email também deve ser informado em um
     * formato válido, caso contrário não será validado.
     * 
     * @example username@server.com
     */
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    /** 
     * Campo obrigatório, deve ser informado uma senha entre 7 e 16 caracteres. Não há outros
     * pré requisitos para criação de senha, dever ser apenas uma string.
     * 
     * @example minhaSenha
     */
    @IsString()
    @IsNotEmpty()
    @Length(7, 16, { message: 'A senha deve ter entre 7 e 16 caracteres' })
    password: string;

    /** 
     * Este campo é obrigatório e dever ser informado conforme passado anteriormente na senha
     * para validar o campo. Se os campos não forem compatíveis, retornará um status code de erro.
     * 
     * @example minhaSenha
     */
    @IsString()
    @IsNotEmpty()
    @Length(7, 16, { message: 'A senha de checagem deve ter entre 7 e 16 caracteres' })
    rePassword: string;
}
