import { Injectable } from '@nestjs/common';
import { CreateAuditorioDto } from './dto/create-auditorio.dto';
import { UpdateAuditorioDto } from './dto/update-auditorio.dto';
import { Auditorio } from './entities/auditorio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuditorioService {

  constructor(
    @InjectRepository(Auditorio)
    private readonly auditorioRepository: Repository<Auditorio>
  ){}

  async crearAuditorio (datos: Partial<Auditorio>) {
    if (datos.capacidad! <= 0){
      throw new Error ("La capacidad no es valida.")
    }
    const auditorio = this.auditorioRepository.create(datos);
    return await this.auditorioRepository.save(auditorio);
  }


}
