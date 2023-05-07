import { PatientEntity } from './patient.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Ambulance')
export class AmbulanceEntity {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    driverName:string
    
    // @Column()
    // hospitalId:number

    @Column()
    rent:number

    @Column({length:11})
    phone:string

    
    @Column({default:true})
    status:boolean

    @Column({nullable:true})
    patientId:number

    @Column()
    location:string
    @Column({nullable:true})
    profilePic:string

    // @ManyToOne(() => PatientEntity, (patient) => patient.ambulance)
    // patientA: PatientEntity



}