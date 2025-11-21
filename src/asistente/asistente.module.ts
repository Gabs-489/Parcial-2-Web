import { Module } from '@nestjs/common';
import { AsistenteService } from './asistente.service';
import { AsistenteController } from './asistente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asistente } from './entities/asistente.entity';
import { Evento } from 'src/evento/entities/evento.entity';
import { EventoService } from 'src/evento/evento.service';

@Module({
  imports: [TypeOrmModule.forFeature([Asistente,Evento])],
  controllers: [AsistenteController],
  providers: [AsistenteService, EventoService],
})
export class AsistenteModule {}
