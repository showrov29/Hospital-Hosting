import { AmbulanceDTO } from './../DTOs/ambulance.dto';
import { Repository } from 'typeorm';

import { Body, Injectable, Param, Query } from '@nestjs/common';
import { AmbulanceEntity } from '../Entities/ambulance.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AmbulanceService {

  constructor(
    @InjectRepository(AmbulanceEntity)
    private ambulanceReppo: Repository<AmbulanceEntity>
    ){}

  
  getAllAmbulance(): any {
    return this.ambulanceReppo.find();
  }
  getAmbulance( id): any {
    return this.ambulanceReppo.findOneBy({id} );
  }
  getAmbulanceByProfile( id): any {
    return this.ambulanceReppo.findBy({patientId: id} );
    
  }
  deleteAmbulance( id): any {
    return this.ambulanceReppo.delete(id);
  }
  editAmbulance( id,data): any {
    return this.ambulanceReppo.update(id,data);
  }
  addAmbulance(ambulance:AmbulanceDTO): any {
    const data = new AmbulanceEntity()
    data.driverName=ambulance.driverName;
    data.phone=ambulance.phone;
    data.rent=ambulance.rent;
    data.status=ambulance.status;
    // data.hospitalId=ambulance.hospitalId;
   
    data.patientId=ambulance.patientA;
    data.location=ambulance.location;
    return this.ambulanceReppo.save(data);
  }

  getAmbulanceByStatus(na): any{
    
    return this.ambulanceReppo.findBy({status:na})
}
  
}