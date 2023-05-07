import { DoctorForm } from "./doctor.dto";
import { DoctorEntity } from "./doctor.entity";
import { Repository } from 'typeorm';
import { MailerService } from "@nestjs-modules/mailer/dist";
export declare class DoctorService {
    private doctorRepo;
    private mailerService;
    constructor(doctorRepo: Repository<DoctorEntity>, mailerService: MailerService);
    getHello(): any;
    getAllDoctors(): any;
    getDoctorById(id: any): any;
    deleteDoctor(id: any): any;
    editDoctor(qry: any): any;
    register(mydto: DoctorForm): any;
    remove(name: any): string;
    updatedoc(id: any, name: any, email: any, password: any, age: any): any;
    updateDoctorbyid(id: any, name: any, email: any, password: any, age: any): any;
    getPatientById(qry: any): any;
    getHospital(name: any): string;
    pres(medicine: any, id: any): any;
    test(test: any, id: any): any;
    uploadProfilePic(id: any, data: any): any;
    login(data: any): Promise<{
        doc: DoctorEntity;
        passErr?: undefined;
        emailErr?: undefined;
    } | {
        passErr: string;
        doc?: undefined;
        emailErr?: undefined;
    } | {
        emailErr: string;
        doc?: undefined;
        passErr?: undefined;
    }>;
    registerid(data: any): Promise<any>;
    uploadNidPdf(id: any, data: any): any;
    addNid(data: any): Promise<any>;
    uploadCertificatePdf(id: any, data: any): any;
    addCertificate(data: any): Promise<any>;
    sendEmail(emailData: any): Promise<any>;
}
