import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { TipoPonente } from "../entities/ponente.entity";

export class CreatePonenteDto {
    @IsNumber()
    @IsNotEmpty()
    num_cedula:number;

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsEnum(TipoPonente)
    @IsNotEmpty()
    tipoPonente: TipoPonente;

    @IsString()
    @IsNotEmpty()
    especialidad: string;
}
