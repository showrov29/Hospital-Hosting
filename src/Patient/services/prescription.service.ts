import { PrescriptionDTO } from './../DTOs/prescription.dto';
import { PrescriptionEntity } from './../Entities/prescription.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class PrescriptionsService {
    constructor(
        @InjectRepository(PrescriptionEntity)
        private prescriptionReppo: Repository<PrescriptionEntity>
        ){}
    
      
      getAllPrescription(): any {
        return this.prescriptionReppo.find();
      }
      getPrescriptionByPatientId( pid): any {
        return this.prescriptionReppo.findBy({patientId:pid})
          
      }
      getPrescriptionById( id): any {
        return this.prescriptionReppo.findOneBy({id})
          
      }
    
      deletePrescription( id): any {
        return this.prescriptionReppo.delete(id);
      }

      editPrescription( id,data): any {
        return this.prescriptionReppo.update(id,data);
      }
      addPrescription(prescription:PrescriptionDTO): any {
        
        return this.prescriptionReppo.save(prescription);
      }
    
    
    
      
}