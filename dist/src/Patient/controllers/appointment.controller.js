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
exports.AppointmentController = void 0;
const appointment_dto_1 = require("./../DTOs/appointment.dto");
const appointment_service_1 = require("./../services/appointment.service");
const common_1 = require("@nestjs/common");
const session_guard_1 = require("../session.guard");
let AppointmentController = class AppointmentController {
    constructor(appointmentService) {
        this.appointmentService = appointmentService;
    }
    getAppointments() {
        return this.appointmentService.getAllAppointments();
    }
    getAppointmentById(id) {
        return this.appointmentService.getAppointmentById(id);
    }
    getAppointmentByProfile(id) {
        console.log(id);
        return this.appointmentService.getAppointmentByProfile(id);
    }
    updateAppointment(id, data) {
        return this.appointmentService.editAppointment(id, data);
    }
    deleteAppointment(id) {
        return this.appointmentService.deleteAppointment(id);
    }
    makeAppointment(appointmentData, mysession) {
        return this.appointmentService.addAppointment(appointmentData, mysession);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(session_guard_1.SessionGuardP),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppointmentController.prototype, "getAppointments", null);
__decorate([
    (0, common_1.Get)('/show/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppointmentController.prototype, "getAppointmentById", null);
__decorate([
    (0, common_1.Get)('/myappointments/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AppointmentController.prototype, "getAppointmentByProfile", null);
__decorate([
    (0, common_1.Put)('/update/:id'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuardP),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Object)
], AppointmentController.prototype, "updateAppointment", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AppointmentController.prototype, "deleteAppointment", null);
__decorate([
    (0, common_1.Post)('/add'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [appointment_dto_1.AppointmentDTO, Object]),
    __metadata("design:returntype", Object)
], AppointmentController.prototype, "makeAppointment", null);
AppointmentController = __decorate([
    (0, common_1.Controller)('appointment'),
    __metadata("design:paramtypes", [appointment_service_1.AppoinmentService])
], AppointmentController);
exports.AppointmentController = AppointmentController;
//# sourceMappingURL=appointment.controller.js.map