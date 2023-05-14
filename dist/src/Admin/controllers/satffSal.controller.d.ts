import { StaffSalService } from "../services/StaffSal.service";
export declare class StaffSalController {
    private readonly staffSalService;
    constructor(staffSalService: StaffSalService);
    getStaffSal(): Promise<import("../entity/staffSal.entity").StaffSalEntity[]>;
    getStaffSalById(id: string): any;
    getStaffSalByIdName(qry: any): any;
    insertStaffSal(mydto: any): any;
    updateStaffSalById(mydto: any, id: number): any;
    updateStaffPat(id: string, StaffSalDto: any): any;
    removeStaffSalById(id: string): any;
}
