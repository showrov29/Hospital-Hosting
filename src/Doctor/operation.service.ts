import { OperationDTO } from './operation.dto';
import { OperationEntity } from './operation.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class OperationService {
    constructor(
        @InjectRepository(OperationEntity)
        private operationReppo: Repository<OperationEntity>
        ){}

  getAllOperation(): any {
    return this.operationReppo.find();
  }
  getOperation( id): any {
    return this.operationReppo.findOneBy({id} );
  }
  editOperation( id,data): any {
    return this.operationReppo.update(id,data);
  }
  addOperation(operation:OperationDTO): any {
    const data = new OperationEntity()
    data.room_number=operation.room_number;
    data.ot_date=operation.ot_date;
    data.ot_time=operation.ot_time;
    return this.operationReppo.save(data);
  }
  
}