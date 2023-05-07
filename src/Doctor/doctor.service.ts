import { Injectable } from '@nestjs/common';
import { DoctorForm } from "./doctor.dto";
import {DoctorEntity} from "./doctor.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { MailerService } from "@nestjs-modules/mailer/dist";


@Injectable()
export class DoctorService {

   constructor(
      @InjectRepository(DoctorEntity)
      private doctorRepo: Repository<DoctorEntity>,
      private mailerService: MailerService
    ) {}

  getHello(): any {
   return this.doctorRepo.find();
}
 getAllDoctors(): any{
    return this.doctorRepo.find();
 }
 getDoctorById(id): any{
    return this.doctorRepo.findOneBy({id});
 }
 deleteDoctor(id):any {    
   return "delete  doctor by id : "+id;
}
 editDoctor(qry): any{
    return "Doctor id : "+qry.id+" and name : "+qry.name;
 }

    register (mydto:DoctorForm):any {
      const doctoraccount = new DoctorEntity()
      doctoraccount.name = mydto.name;
      doctoraccount.email = mydto.email;
      doctoraccount.password = mydto.password;
      doctoraccount.age = mydto.age;
      doctoraccount.contact = mydto.contact;
      doctoraccount.specialist = mydto.specialist;
      doctoraccount.designation = mydto.designation;
      doctoraccount.bmdc_reg_no = mydto.bmdc_reg_no;
      doctoraccount.address = mydto.address;
      doctoraccount.profilePic = mydto.profilePic;
      // doctoraccount.admin = mydto.admin;


     return this.doctorRepo.save(doctoraccount);
     
        }

 remove(name): string{
    return "Removed Medicine : "+name;
 }

updatedoc(id,name,email,password,age):any {
   return "Update Doctor name: " +name+" id:  "+ id+" email: " + email+" password: " +password+" age: " +age;
    }


   updateDoctorbyid(id,name,email,password,age):any {
      return "Update doctor where id " +id+" name:  "+ name+" email: " + email+" password: " +password+" age: " +age;
   }

 getPatientById(qry): any{
    return "Patient id : "+qry.id;
 }
 getHospital(name): string{
    return "Get hospital by name : "+name;
 }
 pres(medicine, id): any{
   return "Medicine no :"+id+"and medicine name: "+medicine;
 }
 test(test, id): any{
   return "Number of test :"+id+"and test name: "+test;
 }  




 uploadProfilePic( id,data): any {
   this.doctorRepo.update(id,data);
   
  return  (this.doctorRepo.update(id,{profilePic:data.profilePic})); 
}



async login(data){
    
   const salt = await bcrypt.genSalt();
   // const hashedPassword = await bcrypt.hash(data.password, 10);
   const doc= await this.doctorRepo.findOneBy({email:data.email});
   if (doc != null){
    //  const isMatch = await bcrypt.compare(data.password, doc.password);


     if(data.password == doc.password) {
       return {doc:doc}
     }
     else{
       return {passErr:"invalid password"}
     }
   }

   else{
     return {emailErr:"invalid email"} ;
   }
  
 }



 async registerid( data): Promise<any> {
  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(data.password, 10);
  data.password = hashedPassword
  return this.doctorRepo.save(data);
}


uploadNidPdf( id,data): any {
   this.doctorRepo.update(id,data);
   
  return  (this.doctorRepo.update(id,{nidPdf:data.nidPdf})); 
}

 async addNid( data): Promise<any> {
  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(data.password, 10);
  data.password = hashedPassword
  return this.doctorRepo.save(data);
}

uploadCertificatePdf( id,data): any {
   this.doctorRepo.update(id,data);
   
  return  (this.doctorRepo.update(id,{certificatePdf:data.certificatePdf})); 
}

 async addCertificate( data): Promise<any> {
  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(data.password, 10);
  data.password = hashedPassword
  return this.doctorRepo.save(data);
}





async sendEmail(emailData){
   return  await this.mailerService.sendMail({
          to: emailData.email,
          subject:'Absence mail',
          text:"sorry today i am busy"
          //text: 'Dear '+emailData.userName+ 'Your Appointment Scheduled at ' + emailData.time +"Patient Name "+emailData.paitentName+ "/n Docator Name: " + emailData.doctorName+'Hospital Name: ' + emailData.hospitalName, 
         });
       }



 
}
