import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
// import { StaffSalDto, UpdateStaffSalDto } from "../dto/StaffSal.dto";
import { StaffSalEntity } from "../entity/staffSal.entity";

@Injectable()
export class StaffSalService {
    constructor(
        @InjectRepository(StaffSalEntity)
        private staffSalRepo: Repository<StaffSalEntity>
      ) {}
 
    getStaffSal() {
        return this.staffSalRepo.find();
    }
    getStaffSalById(id):any {
        return this.staffSalRepo.findOneBy({ id });
    }

    getStaffSalByIdName(qry):any {
        return this.staffSalRepo.findOneBy({ id:qry.id });
   }
   insertStaffSal(mydto:any): any{
    const adminAccount = new StaffSalEntity()
    adminAccount.salary = mydto.salary;
    adminAccount.dateOfPayment = mydto.dateOfPayment;
    adminAccount.month = mydto.month;
    adminAccount.status = mydto.status;
    return this.staffSalRepo.save(adminAccount);
    }

    updateStaffSalById(myData:any, id): any{
        return this.staffSalRepo.update(id, myData);
    }
    updateStaffPat(myData:any, id): any{
        return this.staffSalRepo.update(id, myData);
    }
    
    removeStaffSalById(id): any{
        return this.staffSalRepo.delete(id);
    }
    
}