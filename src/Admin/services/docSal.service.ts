import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DocSalDto, UpdateDocSalDto } from "../dto/docSal.dto";
import { DocSalEntity } from "../entity/docSal.entity";

@Injectable()
export class DocSalService {
    constructor(
        @InjectRepository(DocSalEntity)
        private docSalRepo: Repository<DocSalEntity>
      ) {}
 
    getDocSal() {
        return this.docSalRepo.find();
    }
    getDocSalById(id):any {
        return this.docSalRepo.findOneBy({ id });
    }

    getDocSalByIdName(qry):any {
        return this.docSalRepo.findOneBy({ id:qry.id });
   }
   insertDocSal(mydto: DocSalDto): any{
    const adminaccount = new DocSalEntity()
    adminaccount.salary = mydto.salary;
    adminaccount.dateOfPayment = mydto.dateOfPayment;
    adminaccount.month = mydto.month;
    adminaccount.status = mydto.status;
    return this.docSalRepo.save(adminaccount);
    }

    updateDocSalById(myData:DocSalDto, id): any{
        return this.docSalRepo.update(id, myData);
    }
    updateDocPat(myData:UpdateDocSalDto, id): any{
        return this.docSalRepo.update(id, myData);
    }
    
    removeDocSalById(id): any{
        return this.docSalRepo.delete(id);
    }
    
}