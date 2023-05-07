/// <reference types="multer" />
import { CreateAdminDto, UpdateAdminDto } from "../dto/admin.dto";
import { AdminService } from "../services/admin.service";
import { HospitalService } from "../services/hospital.service";
export declare class AdminController {
    private readonly adminService;
    private hospitalService;
    constructor(adminService: AdminService, hospitalService: HospitalService);
    getAdmin(): Promise<import("../entity/admin.entity").AdminEntity[]>;
    getAdminById(id: string): any;
    getAdminByIdName(qry: any): any;
    changePass(session: any, password: string): any;
    insertAdmin(mydto: CreateAdminDto): any;
    signin(session: any, mydto: CreateAdminDto): {
        message: string;
    };
    updateAdminById(mydto: UpdateAdminDto, id: number): any;
    updateAdminPat(id: number, updateAdminDto: UpdateAdminDto): any;
    removeAdminById(id: string): any;
    getAdminByHospitalId(id: number): any;
    getHospitalsByAdminId(id: number): any;
    getDoctorsByAdminId(id: number): any;
    signup(body: CreateAdminDto, file: Express.Multer.File): any;
    sendEmail(mydata: any): Promise<any>;
    signout(session: any): {
        message: string;
    };
}
