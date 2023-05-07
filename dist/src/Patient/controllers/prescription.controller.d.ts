/// <reference types="multer" />
import { PrescriptionDTO } from './../DTOs/prescription.dto';
import { PrescriptionsService } from './../services/prescription.service';
export declare class PrescriptionController {
    private readonly prescriptionService;
    constructor(prescriptionService: PrescriptionsService);
    addPrescription(data: PrescriptionDTO): any;
    getPrescriptionByPatinetId(id: number): any;
    getPrescription(): any;
    getPrescriptionById(id: number): any;
    deleteAmbulance(id: number): any;
    editPrescription(file: Express.Multer.File, id: number, data: PrescriptionDTO): any;
    getImages(name: any, res: any): void;
}
