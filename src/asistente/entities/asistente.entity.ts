import { Evento } from "src/evento/entities/evento.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToOne(() => Evento, (evento) => evento.asistentes)
    evento:Evento;

}
