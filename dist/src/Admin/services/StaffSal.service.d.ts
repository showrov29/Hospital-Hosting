import { Repository } from "typeorm";
import { StaffSalDto, UpdateStaffSalDto } from "../dto/StaffSal.dto";
import { StaffSalEntity } from "../entity/staffSal.entity";
export declare class StaffSalService {
    private staffSalRepo;
    constructor(staffSalRepo: Repository<StaffSalEntity>);
    getStaffSal(): Promise<StaffSalEntity[]>;
    getStaffSalById(id: any): any;
    getStaffSalByIdName(qry: any): any;
    insertStaffSal(mydto: StaffSalDto): any;
    updateStaffSalById(myData: StaffSalDto, id: any): any;
    updateStaffPat(myData: UpdateStaffSalDto, id: any): any;
    removeStaffSalById(id: any): any;
}
