import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt'
import { PrismaService } from "./../prisma.service";
import { UnauthorizedException } from "@nestjs/common";

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly prisma: PrismaService ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'SECRET'
        })
    }

    async validate(payload: { email: string }){
        const { email } = payload
        console.log(this.prisma.user);
        const user = await this.prisma.user.findUnique({
            where: { email }
        });


        // if(!user) throw new UnauthorizedException('Usuário não encontrado!')

        return 'ok'
    }
}