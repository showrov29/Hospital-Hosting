import { Repository } from "typeorm";
import { HospitalDto, updateHospitalDto } from "../dto/hospital.dto";
import { HospitalEntity } from "../entity/hospital.entity";
export declare class HospitalService {
    private hospitalRepo;
    constructor(hospitalRepo: Repository<HospitalEntity>);
    getHospital(): Promise<HospitalEntity[]>;
    getHospitalById(id: any): any;
    getHospitalByIdName(qry: any): any;
    insertHospital(mydto: HospitalDto): any;
    updateHospitalById(myData: HospitalDto, id: any): any;
    updateHospitalPat(myData: updateHospitalDto, id: any): any;
    removeHospitalById(id: any): any;
    getAdminByHospitalId(id: any): any;
    getBankByhospitalId(id: any): any;
}
