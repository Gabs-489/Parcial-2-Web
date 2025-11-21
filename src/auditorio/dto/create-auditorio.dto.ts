import { IsNotEmpty, IsPositive, IsString } from "class-validator";

export class CreateAuditorioDto {

    @IsString()
    @IsNotEmpty()
    nombre:string;

    @IsPositive()
    @IsNotEmpty()
    capacidad:number;

    @IsString()
    @IsNotEmpty()
    ubicacion:string;

}
