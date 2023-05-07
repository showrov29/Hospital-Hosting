import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("test")
export class TestEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  test_name: string;

  @Column()
  date: string;

  @Column()
  delivery_date: string;

  @Column()
  fees: number;

  @Column()
  refference_by: string;

  @Column()
  patient_no: number;

}