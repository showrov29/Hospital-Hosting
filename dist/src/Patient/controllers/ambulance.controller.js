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
exports.AmbulanceController = void 0;
const ambulance_dto_1 = require("./../DTOs/ambulance.dto");
const common_1 = require("@nestjs/common");
const ambulance_service_1 = require("../services/ambulance.service");
const session_guard_1 = require("../session.guard");
let AmbulanceController = class AmbulanceController {
    constructor(ambulanceService) {
        this.ambulanceService = ambulanceService;
    }
    getAmbulanceById(id) {
        try {
            return this.ambulanceService.getAmbulance(id);
        }
        catch (err) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                error: err,
            }, common_1.HttpStatus.FORBIDDEN, {
                cause: err
            });
        }
    }
    getAmbulanceByStatus() {
        try {
            return this.ambulanceService.getAmbulanceByStatus(true);
        }
        catch (err) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                error: 'something went wrong',
            }, common_1.HttpStatus.FORBIDDEN, {
                cause: err
            });
        }
    }
    getAmbulanceByProfile(id) {
        try {
            console.log(id);
            const x = this.ambulanceService.getAmbulanceByProfile(id);
            return x;
        }
        catch (err) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                error: 'something went wrong',
            }, common_1.HttpStatus.FORBIDDEN, {
                cause: err
            });
        }
    }
    getAmbulances() {
        try {
            return this.ambulanceService.getAllAmbulance();
        }
        catch (err) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                error: 'something went wrong',
            }, common_1.HttpStatus.FORBIDDEN, {
                cause: err
            });
        }
    }
    deleteAmbulance(id) {
        try {
            return this.ambulanceService.deleteAmbulance(id);
        }
        catch (err) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                error: 'something went wrong',
            }, common_1.HttpStatus.FORBIDDEN, {
                cause: err
            });
        }
    }
    editAmbulance(id, data) {
        try {
            return this.ambulanceService.editAmbulance(id, { patientId: data.patientId, status: data.status });
        }
        catch (err) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                error: 'something went wrong',
            }, common_1.HttpStatus.FORBIDDEN, {
                cause: err
            });
        }
    }
    addAmbulance(data) {
        try {
            return this.ambulanceService.addAmbulance(data);
        }
        catch (err) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                error: 'something went wrong',
            }, common_1.HttpStatus.FORBIDDEN, {
                cause: err
            });
        }
    }
    getImages(name, res) {
        res.sendFile(name, { root: './uploads/Ambulance' });
    }
};
__decorate([
    (0, common_1.Get)("show/:id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AmbulanceController.prototype, "getAmbulanceById", null);
__decorate([
    (0, common_1.Get)("/available"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AmbulanceController.prototype, "getAmbulanceByStatus", null);
__decorate([
    (0, common_1.Get)("/booked/profile/:id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AmbulanceController.prototype, "getAmbulanceByProfile", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AmbulanceController.prototype, "getAmbulances", null);
__decorate([
    (0, common_1.Delete)("/delete/:id"),
    (0, common_1.UseGuards)(session_guard_1.SessionGuardP),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AmbulanceController.prototype, "deleteAmbulance", null);
__decorate([
    (0, common_1.Put)("/edit/:id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, ambulance_dto_1.AmbulanceDTO]),
    __metadata("design:returntype", Object)
], AmbulanceController.prototype, "editAmbulance", null);
__decorate([
    (0, common_1.Post)("/register"),
    (0, common_1.UseGuards)(session_guard_1.SessionGuardP),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ambulance_dto_1.AmbulanceDTO]),
    __metadata("design:returntype", Object)
], AmbulanceController.prototype, "addAmbulance", null);
__decorate([
    (0, common_1.Get)('/getimage/:name'),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AmbulanceController.prototype, "getImages", null);
AmbulanceController = __decorate([
    (0, common_1.Controller)("/ambulance"),
    __metadata("design:paramtypes", [ambulance_service_1.AmbulanceService])
], AmbulanceController);
exports.AmbulanceController = AmbulanceController;
//# sourceMappingURL=ambulance.controller.js.map