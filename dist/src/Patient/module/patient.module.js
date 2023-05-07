"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientModule = void 0;
const report_entiry_1 = require("../Entities/report.entiry");
const appointment_service_1 = require("./../services/appointment.service");
const appointment_controller_1 = require("./../controllers/appointment.controller");
const appointment_entity_1 = require("./../Entities/appointment.entity");
const prescription_controller_1 = require("./../controllers/prescription.controller");
const prescription_service_1 = require("./../services/prescription.service");
const prescription_entity_1 = require("./../Entities/prescription.entity");
const ambulance_entity_1 = require("./../Entities/ambulance.entity");
const patient_entity_1 = require("./../Entities/patient.entity");
const ambulance_service_1 = require("./../services/ambulance.service");
const patient_controller_1 = require("./../controllers/patient.controller");
const patient_service_1 = require("./../services/patient.service");
const ambulance_controller_1 = require("../controllers/ambulance.controller");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const mailer_1 = require("@nestjs-modules/mailer");
const report_service_1 = require("../services/report.service");
const report_controller_1 = require("../controllers/report.controller");
let PatientModule = class PatientModule {
};
PatientModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRoot({
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
            typeorm_1.TypeOrmModule.forFeature([ambulance_entity_1.AmbulanceEntity, patient_entity_1.PatientEntity, prescription_entity_1.PrescriptionEntity, appointment_entity_1.AppointmentEntity, report_entiry_1.ReportEntity])
        ],
        providers: [patient_service_1.PatientService, ambulance_service_1.AmbulanceService, prescription_service_1.PrescriptionsService, appointment_service_1.AppoinmentService, report_service_1.ReportService],
        controllers: [patient_controller_1.PatientController, ambulance_controller_1.AmbulanceController, prescription_controller_1.PrescriptionController, appointment_controller_1.AppointmentController, report_controller_1.ReportController],
    })
], PatientModule);
exports.PatientModule = PatientModule;
//# sourceMappingURL=patient.module.js.map