"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const admin_controller_1 = require("../controllers/admin.controller");
const hospital_service_1 = require("../services/hospital.service");
const admin_service_1 = require("../services/admin.service");
const hospital_controller_1 = require("../controllers/hospital.controller");
const admin_entity_1 = require("../entity/admin.entity");
const hospital_entity_1 = require("../entity/hospital.entity");
const typeorm_1 = require("@nestjs/typeorm");
const docSal_entity_1 = require("../entity/docSal.entity");
const docSal_controller_1 = require("../controllers/docSal.controller");
const docSal_service_1 = require("../services/docSal.service");
const bloodBank_entity_1 = require("../entity/bloodBank.entity");
const bloodBank_controller_1 = require("../controllers/bloodBank.controller");
const bloodBank_service_1 = require("../services/bloodBank.service");
const staffSal_entity_1 = require("../entity/staffSal.entity");
const satffSal_controller_1 = require("../controllers/satffSal.controller");
const StaffSal_service_1 = require("../services/StaffSal.service");
let AdminModule = class AdminModule {
};
AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([admin_entity_1.AdminEntity, hospital_entity_1.HospitalEntity, docSal_entity_1.DocSalEntity, bloodBank_entity_1.BloodBankEntity, staffSal_entity_1.StaffSalEntity])
        ],
        controllers: [admin_controller_1.AdminController, hospital_controller_1.HospitalController, docSal_controller_1.DocSalController, bloodBank_controller_1.BloodBankController, satffSal_controller_1.StaffSalController],
        providers: [admin_service_1.AdminService, hospital_service_1.HospitalService, docSal_service_1.DocSalService, bloodBank_service_1.BloodBankService, StaffSal_service_1.StaffSalService],
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map