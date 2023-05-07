import { HospitalDto, updateHospitalDto } from "../dto/hospital.dto";
import { BloodBankService } from "../services/bloodBank.service";
import { HospitalService } from "../services/hospital.service";
export declare class HospitalController {
    private readonly hospitalService;
    private bloodBankService;
    constructor(hospitalService: HospitalService, bloodBankService: BloodBankService);
    getHospital(): Promise<import("../entity/hospital.entity").HospitalEntity[]>;
    getHospitalById(id: string): any;
    getHospitalByIdName(qry: any): any;
    insertHospital(mydto: HospitalDto): any;
    updateHospitalById(mydto: HospitalDto, id: number): any;
    updateHospitalPat(id: string, hospitalDto: updateHospitalDto): any;
    removeHospitalById(id: string): any;
    getBankByhospitalId(id: number): any;
}
