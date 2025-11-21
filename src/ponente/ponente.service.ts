import { Injectable } from '@nestjs/common';
import { CreatePonenteDto } from './dto/create-ponente.dto';
import { UpdatePonenteDto } from './dto/update-ponente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ponente, TipoPonente } from './entities/ponente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PonenteService {

  constructor(
    @InjectRepository(Ponente)
    private readonly ponenteRepository: Repository<Ponente>
  ){}

  async crearPonente(datos: CreatePonenteDto) {
    const email = datos.email!;

    if (datos.tipoPonente! == TipoPonente.INTERNO){
      const final = email.endsWith(".edu") 
      if (!final){
        throw new Error("El correo no es valido.")
      }
    }else{
      //Verificar @ y dominio ya se realizo en el DTO
    }

    const ponenete = this.ponenteRepository.create(datos);
    return await this.ponenteRepository.save(ponenete);
  }


  async findPonenteById(id: number) {
    const ponente : Ponente|null = await this.ponenteRepository.findOne({where:{id}});
    if (!ponente){
      throw new Error("El ponente no existe.")
    }
    return ponente;
  }


  async eliminarPonente(id: number) {
    const ponente = await this.findPonenteById(id);

    if (ponente.eventos.length > 0){
      throw new Error("El ponente no se puede eliminar ya que tiene eventos asociados.")
    }

    return await this.ponenteRepository.delete(id);
  }
}
