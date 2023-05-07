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
exports.PatientController = void 0;
const patient_dto_1 = require("./../DTOs/patient.dto");
const common_1 = require("@nestjs/common");
const patient_service_1 = require("../services/patient.service");
const multer_1 = require("@nestjs/platform-express/multer");
const multer_2 = require("multer");
let PatientController = class PatientController {
    constructor(patientService) {
        this.patientService = patientService;
    }
    getAllPatients() {
        return this.patientService.getAllPatients();
    }
    getPatientById(id) {
        return this.patientService.getPatientById(id);
    }
    async login(mysession, data) {
        try {
            const user = await this.patientService.login(data);
            mysession.userId = user.user.id;
            mysession.userEmail = user.user.email;
            console.log(mysession.userId);
            user.user.password = data.password;
            return user.user;
        }
        catch (err) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                error: 'Login failed',
            }, common_1.HttpStatus.FORBIDDEN, {
                cause: err
            });
        }
    }
    deletePatient(id) {
        return this.patientService.deletePatient(id);
    }
    editPatientDetails(id, data) {
        return this.patientService.editPatientDetails(id, data);
    }
    editPatientPass(id, data) {
        console.log(data);
        return this.patientService.editPatientPass(id, data);
    }
    addUser(data) {
        return this.patientService.addUser(data);
    }
    uploadProfile(file, id, data) {
        data.profilePic = file.filename;
        return this.patientService.uploadProfilePic(id, data);
    }
    signout() {
        return { data: 'Logget out' };
    }
    getImages(name, res) {
        res.sendFile(name, { root: './uploads/paitent/profile' });
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], PatientController.prototype, "getAllPatients", null);
__decorate([
    (0, common_1.Get)("/profile/:id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], PatientController.prototype, "getPatientById", null);
__decorate([
    (0, common_1.Post)("/login/user"),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, patient_dto_1.PatientDTO]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "login", null);
__decorate([
    (0, common_1.Delete)("/delete/:id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", String)
], PatientController.prototype, "deletePatient", null);
__decorate([
    (0, common_1.Put)("/edit/:id"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], PatientController.prototype, "editPatientDetails", null);
__decorate([
    (0, common_1.Put)("/changepass/:id"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], PatientController.prototype, "editPatientPass", null);
__decorate([
    (0, common_1.Post)("/register"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [patient_dto_1.PatientDTO]),
    __metadata("design:returntype", Object)
], PatientController.prototype, "addUser", null);
__decorate([
    (0, common_1.Put)("/profile/upload/:id"),
    (0, common_1.UseInterceptors)((0, multer_1.FileInterceptor)('profilePic', {
        storage: (0, multer_2.diskStorage)({
            destination: './uploads/paitent/profile',
            filename: function (req, file, cb) {
                cb(null, Date.now() + file.originalname);
            }
        })
    })),
    __param(0, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 1600000 }),
            new common_1.FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
        ],
    }))),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, patient_dto_1.PatientDTO]),
    __metadata("design:returntype", Object)
], PatientController.prototype, "uploadProfile", null);
__decorate([
    (0, common_1.Get)('/logout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PatientController.prototype, "signout", null);
__decorate([
    (0, common_1.Get)('/getimage/:name'),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PatientController.prototype, "getImages", null);
PatientController = __decorate([
    (0, common_1.Controller)("/patient"),
    __metadata("design:paramtypes", [patient_service_1.PatientService])
], PatientController);
exports.PatientController = PatientController;
//# sourceMappingURL=patient.controller.js.map