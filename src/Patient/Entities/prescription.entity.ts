import { PatientEntity } from './patient.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('Prescription')
export class PrescriptionEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:'text', nullable:true})
    test:string

    @Column({type:'text',nullable:true})
    medicine:string

    @Column()
    patientAge:number

    @Column({nullable:true})
    appointmentId:number
   

    @Column()
    patientId:number

    @Column()
    patientName:string
    @Column()
    doctorName:string

    @Column({nullable:true})
    pdf:string
    

    // @ManyToOne(()=>PatientEntity,(patient)=>patient.prescriptions)
    // patient:PatientEntity

}