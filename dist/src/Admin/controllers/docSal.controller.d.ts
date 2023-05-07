import { DocSalDto, UpdateDocSalDto } from "../dto/docSal.dto";
import { DocSalService } from "../services/docSal.service";
export declare class DocSalController {
    private readonly docSalService;
    constructor(docSalService: DocSalService);
    getDocSal(): Promise<import("../entity/docSal.entity").DocSalEntity[]>;
    getDocSalById(id: string): any;
    getDocSalByIdName(qry: any): any;
    insertDocSal(mydto: DocSalDto): any;
    updateDocSalById(mydto: DocSalDto, id: number): any;
    updateDocPat(id: string, docSalDto: UpdateDocSalDto): any;
    removeDocSalById(id: string): any;
}
