import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.validateUser(
      loginDto.email,
      loginDto.senha,
    );
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() dto: { nome: string; email: string; senha: string }) {
    return this.authService.register(dto.email, dto.nome, dto.senha);
  }
}
