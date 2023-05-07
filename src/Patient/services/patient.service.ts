import { PatientDTO } from './../DTOs/patient.dto';
import { PatientEntity } from './../Entities/patient.entity';
import { Body, Injectable, Param, Query, Request } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';



@Injectable()
export class PatientService {
  
  constructor (
    @InjectRepository(PatientEntity)
    private patinetReppo: Repository<PatientEntity>
    ){}

  getAllPatients():  any {
    return this.patinetReppo.find();
  }
  async login(data){
    
    const salt = await bcrypt.genSalt();
    // const hashedPassword = await bcrypt.hash(data.password, 10);
    const user= await this.patinetReppo.findOneBy({email:data.email});
    if (user != null){
      const isMatch = await bcrypt.compare(data.password, user.password);
      if(isMatch ) {
        return {user:user}
      }
      else{
        return {passErr:"Iincorrect Password"}
      }
    }

    else{
      return {emailErr:"Iincorrect Email"} ;
    }
   
  }
  deletePatient(id): any {
    return this.patinetReppo.delete(id);
  }
  getPatientById( id): any {
    return this.patinetReppo.findOneBy({id:id});
  }


 async editPatientPass( id,data) {
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword
    
    
    return  this.patinetReppo.update(id,{password:data.password}); 
  }


   async editPatientDetails( id,data) {
    
    
    return  (this.patinetReppo.update(id,data)); 
  }





  uploadProfilePic( id,data): any {
     this.patinetReppo.update(id,data);
     
     
    return  (this.patinetReppo.update(id,{profilePic:data.profilePic})); 
  }
  
   async addUser( data): Promise<any> {
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword
    return this.patinetReppo.save(data);
  }
  
}



