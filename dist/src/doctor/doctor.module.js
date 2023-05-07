"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorModule = void 0;
const common_1 = require("@nestjs/common");
const doctor_controller_1 = require("./doctor.controller");
const doctor_service_1 = require("./doctor.service");
const typeorm_1 = require("@nestjs/typeorm");
const doctor_entity_1 = require("./doctor.entity");
const medicine_service_1 = require("./medicine.service");
const medicine_controller_1 = require("./medicine.controller");
const medicine_entity_1 = require("./medicine.entity");
const operation_service_1 = require("./operation.service");
const operation_controller_1 = require("./operation.controller");
const operation_entity_1 = require("./operation.entity");
const test_service_1 = require("./test.service");
const test_controller_1 = require("./test.controller");
const test_entity_1 = require("./test.entity");
let DoctorModule = class DoctorModule {
};
DoctorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([doctor_entity_1.DoctorEntity, medicine_entity_1.MedicineEntity, test_entity_1.TestEntity, operation_entity_1.OperationEntity])
        ],
        providers: [doctor_service_1.DoctorService, medicine_service_1.MedicineService, test_service_1.TestService, operation_service_1.OperationService],
        controllers: [doctor_controller_1.DoctorController, medicine_controller_1.MedicineController, test_controller_1.TestController, operation_controller_1.OperationController],
    })
], DoctorModule);
exports.DoctorModule = DoctorModule;
//# sourceMappingURL=doctor.module.js.map