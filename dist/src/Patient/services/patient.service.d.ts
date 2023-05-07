import { PatientEntity } from './../Entities/patient.entity';
import { Repository } from 'typeorm';
export declare class PatientService {
    private patinetReppo;
    constructor(patinetReppo: Repository<PatientEntity>);
    getAllPatients(): any;
    login(data: any): Promise<{
        user: PatientEntity;
        passErr?: undefined;
        emailErr?: undefined;
    } | {
        passErr: string;
        user?: undefined;
        emailErr?: undefined;
    } | {
        emailErr: string;
        user?: undefined;
        passErr?: undefined;
    }>;
    deletePatient(id: any): any;
    getPatientById(id: any): any;
    editPatientPass(id: any, data: any): Promise<import("typeorm").UpdateResult>;
    editPatientDetails(id: any, data: any): Promise<import("typeorm").UpdateResult>;
    uploadProfilePic(id: any, data: any): any;
    addUser(data: any): Promise<any>;
}
