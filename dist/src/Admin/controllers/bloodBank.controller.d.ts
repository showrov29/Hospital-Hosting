import { BloodBankDto, updateBloodBankDto } from "../dto/bloodBank.dto";
import { BloodBankService } from "../services/bloodBank.service";
export declare class BloodBankController {
    private readonly bloodBankService;
    constructor(bloodBankService: BloodBankService);
    getBloodBank(): Promise<import("../entity/bloodBank.entity").BloodBankEntity[]>;
    getBloodBankById(id: string): any;
    getBloodBankByIdName(qry: any): any;
    insertBloodBank(mydto: BloodBankDto): any;
    updateBloodBankById(mydto: BloodBankDto, id: number): any;
    updateBloodBankPat(id: string, bloodBankDto: updateBloodBankDto): any;
    removeBloodBankById(id: string): any;
}
