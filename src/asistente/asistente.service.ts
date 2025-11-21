import { Injectable } from '@nestjs/common';
import { CreateAsistenteDto } from './dto/create-asistente.dto';
import { UpdateAsistenteDto } from './dto/update-asistente.dto';
import { Asistente } from './entities/asistente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evento } from 'src/evento/entities/evento.entity';
import { EventoService } from 'src/evento/evento.service';

@Injectable()
export class AsistenteService {

  constructor(
    @InjectRepository(Asistente)
    private readonly asistenteRepository: Repository<Asistente>,

    @InjectRepository(Evento)
    private readonly eventoRepository: Repository<Evento>,

    private readonly eventoService: EventoService
  ){}

  async registrarAsistente(idEvento:number, asistente:Asistente) {
    const evento: Evento|null = await this.eventoService.findEventoById(idEvento);
    const asistentes : Asistente[] = evento.asistentes;
    
    for ( var a of asistentes){
      if (a.email == asistente.email){
        throw new Error("El email ya fue registrado por otro asistente para el evento.")
      }
    }

    if (asistentes.length == evento.auditorio.capacidad){
      throw new Error("El evento ya esta lleno.")
    }

    evento.asistentes.push(asistente)

    return await this.eventoRepository.save(evento);
  }


  async findAsistentesByEvento(idEvento: number) {
    const evento: Evento|null = await this.eventoService.findEventoById(idEvento);
    return evento.asistentes;
  }

}
