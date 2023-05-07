"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppoinmentService = void 0;
const appointment_entity_1 = require("./../Entities/appointment.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const dist_1 = require("@nestjs-modules/mailer/dist");
let AppoinmentService = class AppoinmentService {
    constructor(appointmentRepo, mailerService) {
        this.appointmentRepo = appointmentRepo;
        this.mailerService = mailerService;
    }
    getAllAppointments() {
        return this.appointmentRepo.find();
    }
    getAppointmentByProfile(data) {
        return this.appointmentRepo.findBy({ patientId: data });
    }
    getAppointmentById(id) {
        return this.appointmentRepo.findOneBy(id);
    }
    deleteAppointment(id) {
        return this.appointmentRepo.delete(id);
    }
    editAppointment(id, data) {
        return this.appointmentRepo.update(id, data);
    }
    addAppointment(appointment, userData) {
        const emailData = {
            email: userData.userEmail,
            userName: userData.userName,
            time: appointment.date,
            name: appointment.name,
        };
        this.sendEmail(emailData);
        return this.appointmentRepo.save(appointment);
    }
    async sendEmail(emailData) {
        try {
            return await this.mailerService.sendMail({
                to: emailData.email,
                subject: 'Appointment Scheduled',
                text: 'Dear ' + emailData.userName + ' Your Appointment Scheduled at ' + emailData.time + " Patient Name : " + emailData.name + " Docator Name: " + emailData.doctorName + 'Hospital Name: ' + emailData.hospitalName,
            });
        }
        catch (err) {
            return err;
        }
    }
};
AppoinmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(appointment_entity_1.AppointmentEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        dist_1.MailerService])
], AppoinmentService);
exports.AppoinmentService = AppoinmentService;
//# sourceMappingURL=appointment.service.js.map