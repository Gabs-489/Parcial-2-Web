import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventoService } from './evento.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { NumericType } from 'typeorm';

@Controller('evento')
export class EventoController {
  constructor(private readonly eventoService: EventoService) {}

  @Post()
  crearEvento(@Body() createEventoDto: any) {
    return this.eventoService.crearEvento(createEventoDto);
  }


  @Patch(':id')
  aprobarEvento(@Param('id') id: number) {
    return this.eventoService.aprobarEvento(+id);
  }

  @Get(':id')
  update(@Param('id') id: number) {
    return this.eventoService.findEventoById(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.eventoService.eliminarEvento(+id);
  }
}
