import { AppointmentDTO } from './../DTOs/appointment.dto';
import { AppointmentEntity } from './../Entities/appointment.entity';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MailerService } from "@nestjs-modules/mailer/dist";

@Injectable()
 export class AppoinmentService {
    
    constructor(
        @InjectRepository(AppointmentEntity)
        private appointmentRepo:Repository<AppointmentEntity> ,
        private mailerService:MailerService
         
    ){}


    getAllAppointments():any {
        return this.appointmentRepo.find();
    }
    getAppointmentByProfile(data):any {
      
      
       return this.appointmentRepo.findBy({patientId:data});
        
    }
    getAppointmentById( id): any {
        // return this.appointmentRepo.findOne(id);
         return this.appointmentRepo.findOneBy(id)
      }
    
      deleteAppointment( id): any {
        return this.appointmentRepo.delete(id);
      }

      editAppointment( id,data): any {
        return this.appointmentRepo.update(id,data);
      }
      addAppointment(appointment:AppointmentDTO,userData): any {
        
        const emailData={
            email: userData.userEmail,
            userName: userData.userName,
            time:appointment.date,
            name:appointment.name,
        }

        
        this.sendEmail(emailData);

        return this.appointmentRepo.save(appointment);
      }


      async sendEmail(emailData){

        try{
            return  await this.mailerService.sendMail({
               to: emailData.email,
               subject:'Appointment Scheduled',
              //  text:"abcd"
              // template:'/email'
               text: 'Dear '+emailData.userName+ ' Your Appointment Scheduled at ' + emailData.time +" Patient Name : "+emailData.name+ " Docator Name: " + emailData.doctorName+'Hospital Name: ' + emailData.hospitalName, 
              });
            }

        
        catch(err){
            return err;
        }

        
  }     
   
}