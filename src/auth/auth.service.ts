import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(email: string, senha: string) {
    // controle-users
    const res = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha }),
    });

    if (!res.ok) throw new UnauthorizedException('Credenciais inválidas');

    const data = await res.json();
    return data;
  }

  async login(user: any) {
    return {
      access_token: user.token,
    };
  }
}
