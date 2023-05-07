import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("docSal")
export class DocSalEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    salary: string;

    @Column()
    dateOfPayment: string;

    @Column()
    month: string;

    @Column()
    status: string;

}