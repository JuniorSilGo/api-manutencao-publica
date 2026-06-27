import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'seu_jwt_secret_super_secreto_para_desenvolvimento_123456', 
    });
  }

  async validate(payload: any) {
    return { 
      id: payload.sub || payload.id, 
      email: payload.email, 
      nome: payload.nome 
    };
  }
}
