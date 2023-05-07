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
exports.ReportController = void 0;
const common_1 = require("@nestjs/common");
const report_service_1 = require("../services/report.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let ReportController = class ReportController {
    constructor(reportService) {
        this.reportService = reportService;
    }
    getAmbulanceByPhone(id) {
        try {
            return this.reportService.getReportByPhone(id);
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
    getReportById(id) {
        try {
            return this.reportService.getReportById(id);
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
    editPrescription(file, id, data) {
        data.report = file.filename;
        console.log(data);
        return this.reportService.editReport(id, data);
    }
    getImages(name, res) {
        res.sendFile(name, { root: './uploads' });
    }
    addUser(data) {
        return this.reportService.addReport(data);
    }
};
__decorate([
    (0, common_1.Get)("/show/:id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], ReportController.prototype, "getAmbulanceByPhone", null);
__decorate([
    (0, common_1.Get)("/patient/:id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], ReportController.prototype, "getReportById", null);
__decorate([
    (0, common_1.Put)("/edit/:id"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('report', {
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
    __metadata("design:paramtypes", [Object, Number, Object]),
    __metadata("design:returntype", Object)
], ReportController.prototype, "editPrescription", null);
__decorate([
    (0, common_1.Get)('/getreport/:name'),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ReportController.prototype, "getImages", null);
__decorate([
    (0, common_1.Post)("/addreport"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ReportController.prototype, "addUser", null);
ReportController = __decorate([
    (0, common_1.Controller)("/report"),
    __metadata("design:paramtypes", [report_service_1.ReportService])
], ReportController);
exports.ReportController = ReportController;
//# sourceMappingURL=report.controller.js.map