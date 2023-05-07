import { PrescriptionDTO } from './../DTOs/prescription.dto';
import { PrescriptionEntity } from './../Entities/prescription.entity';
import { Repository } from 'typeorm';
export declare class PrescriptionsService {
    private prescriptionReppo;
    constructor(prescriptionReppo: Repository<PrescriptionEntity>);
    getAllPrescription(): any;
    getPrescriptionByPatientId(pid: any): any;
    getPrescriptionById(id: any): any;
    deletePrescription(id: any): any;
    editPrescription(id: any, data: any): any;
    addPrescription(prescription: PrescriptionDTO): any;
}
