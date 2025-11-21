import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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



}
