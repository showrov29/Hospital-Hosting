import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bloodBank")
export class BloodBankEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    availableBloodDonar : string;

    @Column()
    quantity: string;

    @Column()
    dateOfRecentCollection: string;

    @Column()
    expiredBloodBags: string;

}