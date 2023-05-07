/// <reference types="multer" />
import { DoctorForm } from './doctor.dto';
import { DoctorService } from './doctor.service';
export declare class DoctorController {
    private readonly doctorService;
    constructor(doctorService: DoctorService);
    getAllDoctors(): String;
    getDoctorById(id: number): number;
    deleteDoctor(id: number): any;
    editDoctor(qar: any): String;
    login(mysession: any, data: DoctorForm): Promise<{
        doc: import("./doctor.entity").DoctorEntity;
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
    registerid(mydto: DoctorForm): any;
    remove(name: string): string;
    updatedoc(id: number, name: string, email: string, password: string, age: number): any;
    updateDoctorbyid(name: string, email: string, password: number, age: number, id: number): any;
    getPatientById(qry: any): any;
    getHospital(name: string): string;
    pres(medicine: string, id: number): any;
    test(test: string, id: number): any;
    uploadProfile(file: Express.Multer.File, mysession: any, data: DoctorForm): any;
    signout(mysession: any): {
        message: string;
    };
    uploadNidPdf(file: Express.Multer.File, mysession: any, data: DoctorForm): any;
    uploadCertificatePdf(file: Express.Multer.File, mysession: any, data: DoctorForm): any;
    getImages(name: any, res: any): void;
}
