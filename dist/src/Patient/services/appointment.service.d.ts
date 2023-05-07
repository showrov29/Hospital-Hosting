import { AppointmentDTO } from './../DTOs/appointment.dto';
import { AppointmentEntity } from './../Entities/appointment.entity';
import { Repository } from 'typeorm';
import { MailerService } from "@nestjs-modules/mailer/dist";
export declare class AppoinmentService {
    private appointmentRepo;
    private mailerService;
    constructor(appointmentRepo: Repository<AppointmentEntity>, mailerService: MailerService);
    getAllAppointments(): any;
    getAppointmentByProfile(data: any): any;
    getAppointmentById(id: any): any;
    deleteAppointment(id: any): any;
    editAppointment(id: any, data: any): any;
    addAppointment(appointment: AppointmentDTO, userData: any): any;
    sendEmail(emailData: any): Promise<any>;
}
