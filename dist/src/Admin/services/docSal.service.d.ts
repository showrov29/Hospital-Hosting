import { Repository } from "typeorm";
import { DocSalDto, UpdateDocSalDto } from "../dto/docSal.dto";
import { DocSalEntity } from "../entity/docSal.entity";
export declare class DocSalService {
    private docSalRepo;
    constructor(docSalRepo: Repository<DocSalEntity>);
    getDocSal(): Promise<DocSalEntity[]>;
    getDocSalById(id: any): any;
    getDocSalByIdName(qry: any): any;
    insertDocSal(mydto: DocSalDto): any;
    updateDocSalById(myData: DocSalDto, id: any): any;
    updateDocPat(myData: UpdateDocSalDto, id: any): any;
    removeDocSalById(id: any): any;
}
