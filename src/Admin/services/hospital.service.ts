import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { HospitalDto, updateHospitalDto } from "../dto/hospital.dto";
import { HospitalEntity } from "../entity/hospital.entity";

@Injectable()
export class HospitalService {
    constructor(
        @InjectRepository(HospitalEntity)
        private hospitalRepo: Repository<HospitalEntity>
      ) {}
 
    getHospital() {
        return this.hospitalRepo.find();
    }
    getHospitalById(id):any {
        return this.hospitalRepo.findOneBy({ id });
    }

    getHospitalByIdName(qry):any {
        return this.hospitalRepo.findOneBy({ id:qry.id, name:qry.name});
   }
    insertHospital(mydto: HospitalDto): any{
    const adminaccount = new HospitalEntity()
    adminaccount.name = mydto.name;
    adminaccount.address = mydto.address;
    adminaccount.helpline = mydto.helpline;
    adminaccount.email = mydto.email;
    adminaccount.ambulanceNumber = mydto.ambulanceNumber;
    // adminaccount.admin = mydto.admin;
    // adminaccount.bloodBank = mydto.bloodBank;
    return this.hospitalRepo.save(adminaccount);
    }

    updateHospitalById(myData:HospitalDto, id): any{
        return this.hospitalRepo.update(id, myData);
    }
    updateHospitalPat(myData:updateHospitalDto, id): any{
        return this.hospitalRepo.update(id, myData);
    }
    
    removeHospitalById(id): any{
        return this.hospitalRepo.delete(id);
    }
    
    getAdminByHospitalId(id):any {
        // return this.hospitalRepo.find({ 
        //         where: {id:id},
        //     relations: {
        //         admin: true,
        //     },
        //  });
    }
    getBankByhospitalId(id):any {
        // return this.hospitalRepo.find({ 
        //         where: {id:id},
        //     relations: {
        //         bloodBank: true,
        //     },
        //  });
    }
}