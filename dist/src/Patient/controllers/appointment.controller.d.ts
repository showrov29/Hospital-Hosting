import { AppointmentDTO } from './../DTOs/appointment.dto';
import { AppoinmentService } from './../services/appointment.service';
export declare class AppointmentController {
    private readonly appointmentService;
    constructor(appointmentService: AppoinmentService);
    getAppointments(): any;
    getAppointmentById(id: any): any;
    getAppointmentByProfile(id: number): any;
    updateAppointment(id: number, data: any): any;
    deleteAppointment(id: number): any;
    makeAppointment(appointmentData: AppointmentDTO, mysession: any): any;
}
