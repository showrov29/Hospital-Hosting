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
exports.StaffSalController = void 0;
const common_1 = require("@nestjs/common");
const StaffSal_dto_1 = require("../dto/StaffSal.dto");
const StaffSal_service_1 = require("../services/StaffSal.service");
let StaffSalController = class StaffSalController {
    constructor(staffSalService) {
        this.staffSalService = staffSalService;
    }
    getStaffSal() {
        return this.staffSalService.getStaffSal();
    }
    getStaffSalById(id) {
        return this.staffSalService.getStaffSalById(+id);
    }
    getStaffSalByIdName(qry) {
        return this.staffSalService.getStaffSalByIdName(qry);
    }
    insertStaffSal(mydto) {
        return this.staffSalService.insertStaffSal(mydto);
    }
    updateStaffSalById(mydto, id) {
        return this.staffSalService.updateStaffSalById(mydto, id);
    }
    updateStaffPat(id, StaffSalDto) {
        return this.staffSalService.updateStaffPat(StaffSalDto, id);
    }
    removeStaffSalById(id) {
        return this.staffSalService.removeStaffSalById(+id);
    }
};
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StaffSalController.prototype, "getStaffSal", null);
__decorate([
    (0, common_1.Get)('findStaffSal/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StaffSalController.prototype, "getStaffSalById", null);
__decorate([
    (0, common_1.Get)('findStaffSal'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], StaffSalController.prototype, "getStaffSalByIdName", null);
__decorate([
    (0, common_1.Post)('/insertStaffSal'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StaffSal_dto_1.StaffSalDto]),
    __metadata("design:returntype", Object)
], StaffSalController.prototype, "insertStaffSal", null);
__decorate([
    (0, common_1.Put)('/updateStaffSal/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StaffSal_dto_1.StaffSalDto, Number]),
    __metadata("design:returntype", Object)
], StaffSalController.prototype, "updateStaffSalById", null);
__decorate([
    (0, common_1.Patch)('/updateStaffSalPat/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, StaffSal_dto_1.UpdateStaffSalDto]),
    __metadata("design:returntype", void 0)
], StaffSalController.prototype, "updateStaffPat", null);
__decorate([
    (0, common_1.Delete)('/rmvStaffSal/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], StaffSalController.prototype, "removeStaffSalById", null);
StaffSalController = __decorate([
    (0, common_1.Controller)('staffSal'),
    __metadata("design:paramtypes", [StaffSal_service_1.StaffSalService])
], StaffSalController);
exports.StaffSalController = StaffSalController;
//# sourceMappingURL=satffSal.controller.js.map