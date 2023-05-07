import { MedicineDTO } from './medicine.dto';
import { MedicineEntity } from './medicine.entity';
import { Repository } from 'typeorm';
export declare class MedicineService {
    private medicineReppo;
    constructor(medicineReppo: Repository<MedicineEntity>);
    getAllMedicine(): any;
    getMedicine(id: any): any;
    editMedicine(id: any, data: any): any;
    addMedicine(medicine: MedicineDTO): any;
}
