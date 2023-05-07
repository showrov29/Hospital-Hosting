import { TestDTO } from './test.dto';
import { TestService } from "./test.service";
export declare class TestController {
    private readonly testService;
    constructor(testService: TestService);
    getOperation(): any;
    getTestById(id: number): any;
    editTest(id: number, data: TestDTO): any;
    addTest(data: TestDTO): any;
}
