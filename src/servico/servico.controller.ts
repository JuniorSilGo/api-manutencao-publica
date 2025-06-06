import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ServicoService } from './servico.service';
import { Servico } from './servico.model';
import {
  ApiExtraModels,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateServicoDto } from './DTO/create-servico.dto';
import { UpdateServicoDto } from './DTO/update-servico.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@ApiTags('Serviços')
@ApiExtraModels(CreateServicoDto, UpdateServicoDto)
@Controller('servico')
export class ServicoController {
  constructor(private readonly service: ServicoService) {}
  @ApiOperation({ summary: 'Lista todos os serviços cadastrados.' })
  @Get()
  async listar(): Promise<Servico[]> {
    return this.service.listar();
  }

  @ApiOperation({
    summary: 'Visualiza um serviço cadastrado buscando a partir de um ID.',
  })
  @Get(':id')
  async visualizar(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Servico | null> {
    return this.service.visualizar(id);
  }

  @ApiOperation({ summary: 'Cadastra um novo serviço na base de dados.' })
  @ApiResponse({ status: 201, description: 'Serviço criado com sucesso.' }) 
  @Post()
  async criar(@Body() CreateServicoDto: CreateServicoDto): Promise<Servico> {
    return this.service.criar(CreateServicoDto);
  }

  @ApiOperation({
    summary:
      'Atualiza um serviço existente na base de dados a partir de um ID.',
  })
  @Patch(':id')
  async atualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() UpdateServicoDto: UpdateServicoDto,
  ): Promise<[number]> {
    return this.service.atualizar(id, UpdateServicoDto);
  }

  @ApiOperation({
    summary: 'Deleta um serviço existente na base de dados a partir de um ID.',
  })
  @Delete(':id')
  async deletar(@Param('id', ParseIntPipe) id: number): Promise<number> {
    return this.service.deletar(id);
  }
}
