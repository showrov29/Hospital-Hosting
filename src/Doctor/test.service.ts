import { TestDTO } from './test.dto';
import { TestEntity } from './test.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class TestService {
    constructor(
        @InjectRepository(TestEntity)
        private testReppo: Repository<TestEntity>
        ){}

  getAllTest(): any {
    return this.testReppo.find();
  }
  getTest( id): any {
    return this.testReppo.findOneBy({id} );
  }
  editTest( id,data): any {
    return this.testReppo.update(id,data);
  }
  addTest(test:TestDTO): any {
    const data = new TestEntity()
    data.test_name=test.test_name;
    data.date=test.date;
    data.delivery_date=test.delivery_date;
    data.fees=test.fees;
    data.refference_by=test.refference_by;
    data.patient_no=test.patient_no;
    return this.testReppo.save(data);
  }
  
}