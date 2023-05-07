import { TestDTO } from './test.dto';
import { TestEntity } from './test.entity';
import { Repository } from 'typeorm';
export declare class TestService {
    private testReppo;
    constructor(testReppo: Repository<TestEntity>);
    getAllTest(): any;
    getTest(id: any): any;
    editTest(id: any, data: any): any;
    addTest(test: TestDTO): any;
}
