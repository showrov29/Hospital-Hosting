import { MedicineDTO } from './medicine.dto';
import { MedicineService } from "./medicine.service";
export declare class MedicineController {
    private readonly medicineService;
    constructor(medicineService: MedicineService);
    getMedicine(): any;
    getMedicineById(id: number): any;
    editMedicine(id: number, data: MedicineDTO): any;
    addMedicine(data: MedicineDTO): any;
}
