import { Repository } from "typeorm";
import { CreateAdminDto, UpdateAdminDto } from "../dto/admin.dto";
import { AdminEntity } from "../entity/admin.entity";
import { MailerService } from "@nestjs-modules/mailer";
export declare class AdminService {
    private adminRepo;
    private mailerService;
    constructor(adminRepo: Repository<AdminEntity>, mailerService: MailerService);
    getAdmin(): Promise<AdminEntity[]>;
    getAdminById(id: any): any;
    changePass(password: any, email: any): any;
    getAdminByIdName(qry: any): any;
    insertAdmin(mydto: CreateAdminDto): any;
    updateAdminById(myData: CreateAdminDto, id: any): any;
    updateAdminPat(myData: UpdateAdminDto, id: any): any;
    removeAdminById(id: any): any;
    addUser(data: any): Promise<any>;
    signup(mydto: CreateAdminDto, filename: string): Promise<AdminEntity>;
    signin(mydto: any): Promise<1 | 0>;
    getHospitalsByAdminId(id: any): any;
    getDoctorsByAdminId(id: any): any;
    sendEmail(mydata: any): Promise<any>;
}
