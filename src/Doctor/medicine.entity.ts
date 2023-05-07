import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { DoctorEntity } from './doctor.entity';


@Entity("medicine")
export class MedicineEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  medname: string;

  @Column()
  expdate: string;

  @Column()
  price: number;

  // @ManyToOne(()=>DoctorEntity,(doctor)=>doctor.medicines)
  // doctor:DoctorEntity

}