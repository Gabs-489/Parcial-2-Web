import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AsistenteService } from './asistente.service';
import { CreateAsistenteDto } from './dto/create-asistente.dto';
import { UpdateAsistenteDto } from './dto/update-asistente.dto';

@Controller('asistente')
export class AsistenteController {
  constructor(private readonly asistenteService: AsistenteService) {}

}
