import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("operation")
export class OperationEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  room_number: string;

  @Column()
  ot_date: string;

  @Column()
  ot_time: string;

}