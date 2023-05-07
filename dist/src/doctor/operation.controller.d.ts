import { OperationDTO } from './operation.dto';
import { OperationService } from "./operation.service";
export declare class OperationController {
    private readonly operationService;
    constructor(operationService: OperationService);
    getOperation(): any;
    getOperationById(id: number): any;
    editOperation(id: number, data: OperationDTO): any;
    addOperation(data: OperationDTO): any;
}
