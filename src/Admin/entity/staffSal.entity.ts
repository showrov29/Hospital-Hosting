import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("staffSal")
export class StaffSalEntity{
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