import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("Report")
export class ReportEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  test_name: string;

  @Column()
  date: string;

  @Column()
  delivery_date: string;

  

  @Column()
  phone: string;

  @Column({nullable:true})
  report: string;

  @Column({nullable:true})
  patient_id: number;

}