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
exports.StaffSalService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const staffSal_entity_1 = require("../entity/staffSal.entity");
let StaffSalService = class StaffSalService {
    constructor(staffSalRepo) {
        this.staffSalRepo = staffSalRepo;
    }
    getStaffSal() {
        return this.staffSalRepo.find();
    }
    getStaffSalById(id) {
        return this.staffSalRepo.findOneBy({ id });
    }
    getStaffSalByIdName(qry) {
        return this.staffSalRepo.findOneBy({ id: qry.id });
    }
    insertStaffSal(mydto) {
        const adminAccount = new staffSal_entity_1.StaffSalEntity();
        adminAccount.salary = mydto.salary;
        adminAccount.dateOfPayment = mydto.dateOfPayment;
        adminAccount.month = mydto.month;
        adminAccount.status = mydto.status;
        return this.staffSalRepo.save(adminAccount);
    }
    updateStaffSalById(myData, id) {
        return this.staffSalRepo.update(id, myData);
    }
    updateStaffPat(myData, id) {
        return this.staffSalRepo.update(id, myData);
    }
    removeStaffSalById(id) {
        return this.staffSalRepo.delete(id);
    }
};
StaffSalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(staffSal_entity_1.StaffSalEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StaffSalService);
exports.StaffSalService = StaffSalService;
//# sourceMappingURL=StaffSal.service.js.map