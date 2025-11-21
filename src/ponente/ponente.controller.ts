import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PonenteService } from './ponente.service';
import { CreatePonenteDto } from './dto/create-ponente.dto';
import { UpdatePonenteDto } from './dto/update-ponente.dto';

@Controller('ponente')
export class PonenteController {
  constructor(private readonly ponenteService: PonenteService) {}

}
