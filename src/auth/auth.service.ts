import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

// Store temporário em memória para teste
const users: { id: number; email: string; nome: string; senha: string }[] = [];
let userId = 1;

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(email: string, senha: string) {
    const user = users.find((u) => u.email === email);
    if (!user) {
      throw new UnauthorizedException('Usuário ou senha inválidos');
    }

    // Para teste, comparar direto (em produção usar bcrypt)
    if (user.senha !== senha) {
      throw new UnauthorizedException('Usuário ou senha inválidos');
    }

    return user;
  }

  async login(user: any) {
    if (!user || !user.id || !user.email) {
      throw new BadRequestException('Dados de usuário inválidos');
    }

    const payload = {
      email: user.email,
      sub: user.id,
    };

    return {
      token: this.jwtService.sign(payload),
      usuario: {
        id: user.id,
        email: user.email,
        nome: user.nome || user.email,
      },
    };
  }

  async register(email: string, nome: string, senha: string) {
    // Verificar se email já existe
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      throw new BadRequestException('Email já cadastrado');
    }

    // Criar novo usuário
    const newUser = {
      id: userId++,
      email,
      nome,
      senha, // Em produção, usar bcrypt
    };

    users.push(newUser);

    // Fazer login automaticamente
    return this.login(newUser);
  }
}
