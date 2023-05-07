import { AmbulanceEntity } from './ambulance.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PrescriptionEntity } from "./prescription.entity";

@Entity('Patient')
export class PatientEntity {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    firstName:string
    
    @Column()
    lastName:string

    @Column()
    dob:string

    @Column({length:11})
    phone:string

    
    @Column({unique:true})
    email:string

    @Column()
    password:string

    @Column({default:false})
    status:boolean

    @Column({unique:true,default:null})
    profilePic:string

    // @OneToMany(()=>PrescriptionEntity,(prescription)=>prescription.patient)
    // prescriptions:PrescriptionEntity[]

    // @OneToMany(() => AmbulanceEntity, (ambulance) => ambulance.patientA)
    // ambulance: AmbulanceEntity[]




}