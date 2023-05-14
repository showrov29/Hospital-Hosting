import { Repository } from "typeorm";
import { StaffSalEntity } from "../entity/staffSal.entity";
export declare class StaffSalService {
    private staffSalRepo;
    constructor(staffSalRepo: Repository<StaffSalEntity>);
    getStaffSal(): Promise<StaffSalEntity[]>;
    getStaffSalById(id: any): any;
    getStaffSalByIdName(qry: any): any;
    insertStaffSal(mydto: any): any;
    updateStaffSalById(myData: any, id: any): any;
    updateStaffPat(myData: any, id: any): any;
    removeStaffSalById(id: any): any;
}
