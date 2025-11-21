import { Evento } from "src/evento/entities/evento.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('auditorio')
export class Auditorio {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre:string;

    @Column()
    capacidad:number;

    @Column()
    ubicacion:string;

    @OneToMany(()  => Evento , (evento) => evento.auditorio)
    eventos:Evento[];



}
