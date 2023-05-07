import { StaffSalDto, UpdateStaffSalDto } from "../dto/StaffSal.dto";
import { StaffSalService } from "../services/StaffSal.service";
export declare class StaffSalController {
    private readonly staffSalService;
    constructor(staffSalService: StaffSalService);
    getStaffSal(): Promise<import("../entity/staffSal.entity").StaffSalEntity[]>;
    getStaffSalById(id: string): any;
    getStaffSalByIdName(qry: any): any;
    insertStaffSal(mydto: StaffSalDto): any;
    updateStaffSalById(mydto: StaffSalDto, id: number): any;
    updateStaffPat(id: string, StaffSalDto: UpdateStaffSalDto): any;
    removeStaffSalById(id: string): any;
}
