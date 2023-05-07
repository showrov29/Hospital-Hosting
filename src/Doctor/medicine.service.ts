import { MedicineDTO } from './medicine.dto';
import { MedicineEntity } from './medicine.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class MedicineService {
    constructor(
        @InjectRepository(MedicineEntity)
        private medicineReppo: Repository<MedicineEntity>
        ){}

  getAllMedicine(): any {
    return this.medicineReppo.find();
  }
  getMedicine( id): any {
    return this.medicineReppo.findOneBy({id} );
  }
  editMedicine( id,data): any {
    return this.medicineReppo.update(id,data);
  }
  addMedicine(medicine:MedicineDTO): any {
    const data = new MedicineEntity()
    data.medname=medicine.medname;
    data.expdate=medicine.expdate;
    data.price=medicine.price;
    return this.medicineReppo.save(data);
  }
  
}