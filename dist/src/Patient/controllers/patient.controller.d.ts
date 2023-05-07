/// <reference types="multer" />
import { PatientDTO } from './../DTOs/patient.dto';
import { PatientService } from "../services/patient.service";
export declare class PatientController {
    private readonly patientService;
    constructor(patientService: PatientService);
    getAllPatients(): any;
    getPatientById(id: number): any;
    login(mysession: any, data: PatientDTO): Promise<import("../Entities/patient.entity").PatientEntity>;
    deletePatient(id: number): String;
    editPatientDetails(id: number, data: any): Promise<import("typeorm").UpdateResult>;
    editPatientPass(id: number, data: any): Promise<import("typeorm").UpdateResult>;
    addUser(data: PatientDTO): any;
    uploadProfile(file: Express.Multer.File, id: number, data: PatientDTO): any;
    signout(): {
        data: string;
    };
    getImages(name: any, res: any): void;
}
