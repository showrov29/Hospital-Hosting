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
exports.BloodBankController = void 0;
const common_1 = require("@nestjs/common");
const bloodBank_dto_1 = require("../dto/bloodBank.dto");
const bloodBank_service_1 = require("../services/bloodBank.service");
const session_guard_1 = require("../session.guard");
let BloodBankController = class BloodBankController {
    constructor(bloodBankService) {
        this.bloodBankService = bloodBankService;
    }
    getBloodBank() {
        return this.bloodBankService.getBloodBank();
    }
    getBloodBankById(id) {
        return this.bloodBankService.getBloodBankById(+id);
    }
    getBloodBankByIdName(qry) {
        return this.bloodBankService.getBloodBankByIdName(qry);
    }
    insertBloodBank(mydto) {
        return this.bloodBankService.insertBloodBank(mydto);
    }
    updateBloodBankById(mydto, id) {
        return this.bloodBankService.updateBloodBankById(mydto, id);
    }
    updateBloodBankPat(id, bloodBankDto) {
        return this.bloodBankService.updateBloodBankPat(bloodBankDto, id);
    }
    removeBloodBankById(id) {
        return this.bloodBankService.removeBloodBankById(+id);
    }
};
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BloodBankController.prototype, "getBloodBank", null);
__decorate([
    (0, common_1.Get)('getBloodBank/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BloodBankController.prototype, "getBloodBankById", null);
__decorate([
    (0, common_1.Get)('findBloodBank'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], BloodBankController.prototype, "getBloodBankByIdName", null);
__decorate([
    (0, common_1.Post)('/insertBloodBank'),
    (0, common_1.UseGuards)(session_guard_1.AdminGuard),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bloodBank_dto_1.BloodBankDto]),
    __metadata("design:returntype", Object)
], BloodBankController.prototype, "insertBloodBank", null);
__decorate([
    (0, common_1.Put)('/updateBloodBank/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bloodBank_dto_1.BloodBankDto, Number]),
    __metadata("design:returntype", Object)
], BloodBankController.prototype, "updateBloodBankById", null);
__decorate([
    (0, common_1.Patch)('/updateBloodBankPat/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, bloodBank_dto_1.updateBloodBankDto]),
    __metadata("design:returntype", void 0)
], BloodBankController.prototype, "updateBloodBankPat", null);
__decorate([
    (0, common_1.Delete)('/rmvBloodBank/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], BloodBankController.prototype, "removeBloodBankById", null);
BloodBankController = __decorate([
    (0, common_1.Controller)('bloodBank'),
    __metadata("design:paramtypes", [bloodBank_service_1.BloodBankService])
], BloodBankController);
exports.BloodBankController = BloodBankController;
//# sourceMappingURL=bloodBank.controller.js.map