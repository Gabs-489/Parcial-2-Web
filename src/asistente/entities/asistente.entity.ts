import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('asistente')
export class Asistente {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre:string;

    @Column()
    codigoEstudiante:number;

    @Column()
    email:string;

}
