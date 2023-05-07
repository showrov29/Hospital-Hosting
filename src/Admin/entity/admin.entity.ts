import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";
import { HospitalEntity } from "./hospital.entity";
// import { Gender } from "../dto/admin.dto";

@Entity("admin")
export class AdminEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    password: string;

    @Column()
    gender: string;

    @Column()
    address: string;

    @Column()
    email: string;

    @Column()
    contactNo: string;

    @Column({default:null})
    filename:string;

//     @OneToMany(() => HospitalEntity, (hospital) => hospital.admin)
//     hospitals: HospitalEntity[];

//     @OneToMany(() => HospitalEntity, (doctor) => doctor.admin)
//     doctors: HospitalEntity[];
}