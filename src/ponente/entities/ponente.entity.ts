import { Evento } from "src/evento/entities/evento.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export enum TipoPonente {
  INTERNO = 'Interno',
  INVITADO = 'Invitado'
}

@Entity('ponente')
export class Ponente {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    num_cedula:number;

    @Column()
    nombre: string;

    @Column()
    email: string;

    @Column()
    tipoPonente: TipoPonente;

    @Column()
    especialidad: string;

    @OneToMany(() => Evento , (evento) => evento.ponente)
    eventos:Evento[];
}
