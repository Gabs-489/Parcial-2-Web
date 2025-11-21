import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('evento')
export class Evento {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    titulo:string;

    @Column()
    descripcion:string;

    @Column()
    fecha: Date;

    @Column()
    duracionHoras: number;

    @Column()
    estado:string;
}
