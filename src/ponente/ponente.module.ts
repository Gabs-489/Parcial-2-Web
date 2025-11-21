import { Module } from '@nestjs/common';
import { PonenteService } from './ponente.service';
import { PonenteController } from './ponente.controller';
import { Ponente } from './entities/ponente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ponente])],
  controllers: [PonenteController],
  providers: [PonenteService],
})
export class PonenteModule {}
