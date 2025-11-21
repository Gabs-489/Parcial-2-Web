import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAsistenteDto {

    @IsString()
    @IsNotEmpty()
    nombre:string;

    @IsNumber()
    @IsNotEmpty()
    codigoEstudiante:number;

    @IsEmail()
    @IsNotEmpty()
    email:string;

}
