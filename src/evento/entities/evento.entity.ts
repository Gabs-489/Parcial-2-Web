import { Asistente } from "src/asistente/entities/asistente.entity";
import { Auditorio } from "src/auditorio/entities/auditorio.entity";
import { Ponente } from "src/ponente/entities/ponente.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export enum EstadoEvento {
  PROPUESTO = 'Propuesto',
  APROBADO = 'Aprobado',
  RECHAZADO = 'Rechazado'
}

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
    estado:EstadoEvento;

    @ManyToOne(() => Ponente , (ponente) => ponente.eventos)
    ponente: Ponente;

    @ManyToOne(() => Auditorio, (auditorio) => auditorio.eventos)
    auditorio:Auditorio;

    @OneToMany(() => Asistente , (asistente) => asistente.evento)
    asistentes: Asistente[];
}
