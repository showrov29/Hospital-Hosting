import { Repository } from "typeorm";
import { BloodBankDto, updateBloodBankDto } from "../dto/bloodBank.dto";
import { BloodBankEntity } from "../entity/bloodBank.entity";
export declare class BloodBankService {
    private bloodBankRepo;
    constructor(bloodBankRepo: Repository<BloodBankEntity>);
    getBloodBank(): Promise<BloodBankEntity[]>;
    getBloodBankById(id: any): any;
    getBloodBankByIdName(qry: any): any;
    insertBloodBank(mydto: BloodBankDto): any;
    updateBloodBankById(myData: BloodBankDto, id: any): any;
    updateBloodBankPat(myData: updateBloodBankDto, id: any): any;
    removeBloodBankById(id: any): any;
}
