import { OperationDTO } from './operation.dto';
import { OperationEntity } from './operation.entity';
import { Repository } from 'typeorm';
export declare class OperationService {
    private operationReppo;
    constructor(operationReppo: Repository<OperationEntity>);
    getAllOperation(): any;
    getOperation(id: any): any;
    editOperation(id: any, data: any): any;
    addOperation(operation: OperationDTO): any;
}
