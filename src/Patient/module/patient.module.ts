import { ReportEntity } from '../Entities/report.entiry';
import { AppoinmentService } from './../services/appointment.service';
import { AppointmentController } from './../controllers/appointment.controller';
import { AppointmentEntity } from './../Entities/appointment.entity';
import {  PrescriptionController } from './../controllers/prescription.controller';
import { PrescriptionsService } from './../services/prescription.service';
import { PrescriptionEntity } from './../Entities/prescription.entity';
import { AmbulanceEntity } from './../Entities/ambulance.entity';
import { PatientEntity } from './../Entities/patient.entity';
import { AmbulanceService } from './../services/ambulance.service';
import { PatientController } from './../controllers/patient.controller';
import { PatientService } from './../services/patient.service';
import { AmbulanceController } from '../controllers/ambulance.controller';

import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';
import { ReportService } from '../services/report.service';
import { ReportController } from '../controllers/report.controller';

@Module({

    imports: [
        MailerModule.forRoot({
            transport: {
              host: 'smtp.gmail.com',
                       port: 465,
                       ignoreTLS: true,
                       secure: true,
                       auth: {
                           user: 'abcdhealthcare24@gmail.com',
                           pass: 'edmhnqgrzwkdyfik'
                       },
                      }
          }),
        
        TypeOrmModule.forFeature([AmbulanceEntity,PatientEntity,PrescriptionEntity,AppointmentEntity,ReportEntity])],
    providers: [PatientService,AmbulanceService,PrescriptionsService,AppoinmentService,ReportService],
    controllers: [PatientController,AmbulanceController,PrescriptionController,AppointmentController,ReportController],
})
export class PatientModule {
}