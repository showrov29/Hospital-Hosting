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
exports.PrescriptionController = void 0;
const prescription_dto_1 = require("./../DTOs/prescription.dto");
const prescription_service_1 = require("./../services/prescription.service");
const common_1 = require("@nestjs/common");
const session_guard_1 = require("../session.guard");
const multer_1 = require("multer");
const platform_express_1 = require("@nestjs/platform-express");
let PrescriptionController = class PrescriptionController {
    constructor(prescriptionService) {
        this.prescriptionService = prescriptionService;
    }
    addPrescription(data) {
        return this.prescriptionService.addPrescription(data);
    }
    getPrescriptionByPatinetId(id) {
        return this.prescriptionService.getPrescriptionByPatientId(id);
    }
    getPrescription() {
        return this.prescriptionService.getAllPrescription();
    }
    getPrescriptionById(id) {
        return this.prescriptionService.getPrescriptionById(id);
    }
    deleteAmbulance(id) {
        return this.prescriptionService.deletePrescription(id);
    }
    editPrescription(file, id, data) {
        data.pdf = file.filename;
        console.log(data);
        return this.prescriptionService.editPrescription(id, data);
    }
    getImages(name, res) {
        res.sendFile(name, { root: './uploads/prescription' });
    }
};
__decorate([
    (0, common_1.Post)("/prescribe"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [prescription_dto_1.PrescriptionDTO]),
    __metadata("design:returntype", Object)
], PrescriptionController.prototype, "addPrescription", null);
__decorate([
    (0, common_1.Get)("/myprescription/:id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], PrescriptionController.prototype, "getPrescriptionByPatinetId", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], PrescriptionController.prototype, "getPrescription", null);
__decorate([
    (0, common_1.Get)("/show/:id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], PrescriptionController.prototype, "getPrescriptionById", null);
__decorate([
    (0, common_1.Delete)("/delete/:id"),
    (0, common_1.UseGuards)(session_guard_1.SessionGuardP),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], PrescriptionController.prototype, "deleteAmbulance", null);
__decorate([
    (0, common_1.Put)("/edit/:id"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('pdf', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/prescription',
            filename: function (req, file, cb) {
                cb(null, Date.now() + file.originalname);
            }
        })
    })),
    __param(0, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 1600000 }),
            new common_1.FileTypeValidator({ fileType: 'pdf' }),
        ],
    }))),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, prescription_dto_1.PrescriptionDTO]),
    __metadata("design:returntype", Object)
], PrescriptionController.prototype, "editPrescription", null);
__decorate([
    (0, common_1.Get)('/getprescription/:name'),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PrescriptionController.prototype, "getImages", null);
PrescriptionController = __decorate([
    (0, common_1.Controller)("/prescription"),
    __metadata("design:paramtypes", [prescription_service_1.PrescriptionsService])
], PrescriptionController);
exports.PrescriptionController = PrescriptionController;
//# sourceMappingURL=prescription.controller.js.map