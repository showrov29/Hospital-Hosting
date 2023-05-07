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
exports.HospitalController = void 0;
const common_1 = require("@nestjs/common");
const hospital_dto_1 = require("../dto/hospital.dto");
const bloodBank_service_1 = require("../services/bloodBank.service");
const hospital_service_1 = require("../services/hospital.service");
let HospitalController = class HospitalController {
    constructor(hospitalService, bloodBankService) {
        this.hospitalService = hospitalService;
        this.bloodBankService = bloodBankService;
    }
    getHospital() {
        return this.hospitalService.getHospital();
    }
    getHospitalById(id) {
        return this.hospitalService.getHospitalById(+id);
    }
    getHospitalByIdName(qry) {
        return this.hospitalService.getHospitalByIdName(qry);
    }
    insertHospital(mydto) {
        return this.hospitalService.insertHospital(mydto);
    }
    updateHospitalById(mydto, id) {
        return this.hospitalService.updateHospitalById(mydto, id);
    }
    updateHospitalPat(id, hospitalDto) {
        return this.hospitalService.updateHospitalPat(hospitalDto, id);
    }
    removeHospitalById(id) {
        return this.hospitalService.removeHospitalById(+id);
    }
    getBankByhospitalId(id) {
        return this.hospitalService.getBankByhospitalId(id);
    }
};
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HospitalController.prototype, "getHospital", null);
__decorate([
    (0, common_1.Get)('getHospital/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HospitalController.prototype, "getHospitalById", null);
__decorate([
    (0, common_1.Get)('findHospital'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], HospitalController.prototype, "getHospitalByIdName", null);
__decorate([
    (0, common_1.Post)('/insertHospital'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [hospital_dto_1.HospitalDto]),
    __metadata("design:returntype", Object)
], HospitalController.prototype, "insertHospital", null);
__decorate([
    (0, common_1.Put)('/updateHospital/:id'),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [hospital_dto_1.HospitalDto, Number]),
    __metadata("design:returntype", Object)
], HospitalController.prototype, "updateHospitalById", null);
__decorate([
    (0, common_1.Patch)('/updateHospitalPat/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, hospital_dto_1.updateHospitalDto]),
    __metadata("design:returntype", void 0)
], HospitalController.prototype, "updateHospitalPat", null);
__decorate([
    (0, common_1.Delete)('/rmvHospital/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], HospitalController.prototype, "removeHospitalById", null);
__decorate([
    (0, common_1.Get)('/findBankByhospital/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], HospitalController.prototype, "getBankByhospitalId", null);
HospitalController = __decorate([
    (0, common_1.Controller)('hospital'),
    __metadata("design:paramtypes", [hospital_service_1.HospitalService,
        bloodBank_service_1.BloodBankService])
], HospitalController);
exports.HospitalController = HospitalController;
//# sourceMappingURL=hospital.controller.js.map