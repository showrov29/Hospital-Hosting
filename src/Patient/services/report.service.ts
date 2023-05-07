import { IsDate } from 'class-validator';
import { AmbulanceDTO } from './../DTOs/ambulance.dto';
import { Repository } from 'typeorm';

import { Body, Injectable, Param, Query } from '@nestjs/common';
import { AmbulanceEntity } from '../Entities/ambulance.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ReportEntity } from '../Entities/report.entiry';

@Injectable()
export class ReportService {

  constructor(
    @InjectRepository(ReportEntity)
    private reportRepo: Repository<ReportEntity>
    ){}

  
  
  getReportByPhone( id): any {
    return this.reportRepo.findOneBy({id} );
    
  }
  getReportById( id): any {
    return this.reportRepo.findBy({patient_id: id} );
    
  }


  editReport( id,data): any {
    return this.reportRepo.update(id,data);
  }
  
  addReport( data): any {
    return this.reportRepo.save(data);
  }
  
  
}