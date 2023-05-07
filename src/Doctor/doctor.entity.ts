import { AdminEntity } from 'src/Admin/entity/admin.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { MedicineEntity } from "./medicine.entity";


@Entity("doctor")
export class DoctorEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  age: number;

  @Column()
  contact: number;

  @Column()
  specialist: string;
  @Column()
  fees: number;

  @Column()
  address: string;

  @Column({default:null})
  designation: string;

  @Column({unique:true,default:null})
  profilePic:string

  @Column({unique:true,default:null})
  nidPdf:string

  @Column({unique:true,default:null})
  certificatePdf:string

  @Column()
  bmdc_reg_no: string;



  // @OneToMany(() => MedicineEntity, (medicine) => medicine.doctor)
  // medicines: MedicineEntity[]

  // @ManyToOne(() => AdminEntity, (admin) => admin.doctors)
  // admin: AdminEntity




}