import { Injectable } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EstadoEvento, Evento } from './entities/evento.entity';
import { Repository } from 'typeorm';
import { TipoPonente } from 'src/ponente/entities/ponente.entity';

@Injectable()
export class EventoService {

  constructor(
    @InjectRepository(Evento)
    private readonly eventoRepository: Repository<Evento>
  ){}
  


  async crearEvento(datos: Partial<Evento>) {
    if (datos.duracionHoras! <= 0){
      throw new Error ("La duracion debe ser positiva y mayor a 0.")
    }

    if (datos.ponente?.tipoPonente == TipoPonente.INVITADO && datos.descripcion!.length < 50){
      throw new Error ("La descripcion debe ser de mas de 50 caracteres.")
    }

    const evento = this.eventoRepository.create(datos);
    return await this.eventoRepository.save(evento);
  }

  async aprobarEvento(id:number){
    const evento = await this.findEventoById(id);

    if (evento.auditorio !== null){
      evento.estado = EstadoEvento.APROBADO;
    }else{
      throw new Error("El evento no tiene un auditorio asignado.")
    }

    return await this.eventoRepository.save(evento);
  }


  async findEventoById(id: number) {
    const evento : Evento|null = await this.eventoRepository.findOne({where:{id}});
    if (!evento){
      throw new Error("El evento no existe.")
    }
    return evento;
  }


  async eliminarEvento(id: number) {
    const evento = await this.findEventoById(id);

    if (evento.estado == EstadoEvento.APROBADO){
      throw new Error("El evento esta aprobado.")
    }
    return await this.eventoRepository.delete(id);
  }
}
