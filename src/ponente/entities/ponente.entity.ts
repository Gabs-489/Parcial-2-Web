import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    tipoPonente: string;

    @Column()
    especialidad: string;
}
