import { Column, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";
import { AdminEntity } from "./admin.entity";
import { BloodBankEntity } from "./bloodBank.entity";
@Entity("hospital")
export class HospitalEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    helpline: string;

    @Column()
    email: string;

    @Column()
    ambulanceNumber: number;

    // @ManyToOne(() => AdminEntity, (admin) => admin.hospitals)
    // admin: AdminEntity

    // @OneToOne(()=>BloodBankEntity)
    // @JoinColumn()
    // bloodBank:BloodBankEntity;

}