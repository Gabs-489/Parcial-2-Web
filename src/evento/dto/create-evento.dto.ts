import { IsDate, IsEnum, IsInstance, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";
import { EstadoEvento } from "../entities/evento.entity";
import { Ponente } from "src/ponente/entities/ponente.entity";

export class CreateEventoDto {

    @IsString()
    @IsNotEmpty()
    titulo:string;

    @IsString()
    @IsNotEmpty()
    descripcion:string;

    @IsNotEmpty()
    @IsDate()
    fecha: Date;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    duracionHoras: number;

    @IsEnum(EstadoEvento)
    estado:EstadoEvento;

    @IsNumber()
    @IsInstance(Ponente)
    ponente: Ponente;


}
