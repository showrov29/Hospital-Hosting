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
exports.DoctorController = void 0;
const common_1 = require("@nestjs/common");
const doctor_dto_1 = require("./doctor.dto");
const doctor_service_1 = require("./doctor.service");
const multer_1 = require("@nestjs/platform-express/multer");
const multer_2 = require("multer");
const session_guard_1 = require("./session.guard");
let DoctorController = class DoctorController {
    constructor(doctorService) {
        this.doctorService = doctorService;
    }
    getAllDoctors() {
        return this.doctorService.getAllDoctors();
    }
    getDoctorById(id) {
        return this.doctorService.getDoctorById(id);
    }
    deleteDoctor(id) {
        return this.doctorService.deleteDoctor(id);
    }
    editDoctor(qar) {
        return this.doctorService.editDoctor(qar);
    }
    async login(mysession, data) {
        const doc = await this.doctorService.login(data);
        mysession.docId = doc.doc.id;
        mysession.docEmail = doc.doc.email;
        console.log(mysession.docEmail);
        return doc;
    }
    registerid(mydto) {
        return this.doctorService.register(mydto);
    }
    remove(name) {
        return this.doctorService.remove(name);
    }
    updatedoc(id, name, email, password, age) {
        return this.doctorService.updatedoc(id, name, email, password, age);
    }
    updateDoctorbyid(name, email, password, age, id) {
        return this.doctorService.updateDoctorbyid(id, name, email, password, age);
    }
    getPatientById(qry) {
        return this.doctorService.getPatientById(qry);
    }
    getHospital(name) {
        return this.doctorService.getHospital(name);
    }
    pres(medicine, id) {
        return this.doctorService.pres(medicine, id);
    }
    test(test, id) {
        return this.doctorService.test(test, id);
    }
    uploadProfile(file, mysession, data) {
        console.log(file.originalname + mysession.docId);
        data.profilePic = file.filename;
        return this.doctorService.uploadProfilePic(mysession.docId, data);
    }
    signout(mysession) {
        if (mysession.destroy()) {
            return { message: "Logged Out" };
        }
        else {
            throw new common_1.UnauthorizedException("Something Wrong");
        }
    }
    uploadNidPdf(file, mysession, data) {
        console.log(file.originalname + mysession.docId);
        data.nidPdf = file.filename;
        return this.doctorService.uploadNidPdf(mysession.docId, data);
    }
    uploadCertificatePdf(file, mysession, data) {
        console.log(file.originalname + mysession.docId);
        data.certificatePdf = file.filename;
        return this.doctorService.uploadCertificatePdf(mysession.docId, data);
    }
    getImages(name, res) {
        res.sendFile(name, { root: './uploads/doctor/profile' });
    }
};
__decorate([
    (0, common_1.Get)("/alldoc"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], DoctorController.prototype, "getAllDoctors", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Number)
], DoctorController.prototype, "getDoctorById", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], DoctorController.prototype, "deleteDoctor", null);
__decorate([
    (0, common_1.Put)("/edit/:id"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], DoctorController.prototype, "editDoctor", null);
__decorate([
    (0, common_1.Get)("/login/doc"),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, doctor_dto_1.DoctorForm]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('/register'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [doctor_dto_1.DoctorForm]),
    __metadata("design:returntype", Object)
], DoctorController.prototype, "registerid", null);
__decorate([
    (0, common_1.Delete)("/remove/:name"),
    __param(0, (0, common_1.Param)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], DoctorController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)("/update/"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)("id")),
    __param(1, (0, common_1.Body)("name")),
    __param(2, (0, common_1.Body)("email")),
    __param(3, (0, common_1.Body)("password")),
    __param(4, (0, common_1.Body)("age")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, Number]),
    __metadata("design:returntype", Object)
], DoctorController.prototype, "updatedoc", null);
__decorate([
    (0, common_1.Put)("/update/:id"),
    __param(0, (0, common_1.Body)("name")),
    __param(1, (0, common_1.Body)("email")),
    __param(2, (0, common_1.Body)("password")),
    __param(3, (0, common_1.Body)("age")),
    __param(4, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Number, Number]),
    __metadata("design:returntype", Object)
], DoctorController.prototype, "updateDoctorbyid", null);
__decorate([
    (0, common_1.Get)("/Patient/:id"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], DoctorController.prototype, "getPatientById", null);
__decorate([
    (0, common_1.Get)("/hospital/:name"),
    __param(0, (0, common_1.Param)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], DoctorController.prototype, "getHospital", null);
__decorate([
    (0, common_1.Put)("/prescription"),
    __param(0, (0, common_1.Body)("medicine")),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Object)
], DoctorController.prototype, "pres", null);
__decorate([
    (0, common_1.Put)("/test"),
    __param(0, (0, common_1.Body)("test")),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Object)
], DoctorController.prototype, "test", null);
__decorate([
    (0, common_1.Put)("/profile/upload"),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.UseInterceptors)((0, multer_1.FileInterceptor)('profilePic', {
        storage: (0, multer_2.diskStorage)({
            destination: './uploads/doctor/profile',
            filename: function (req, file, cb) {
                cb(null, Date.now() + file.originalname);
            }
        })
    })),
    __param(0, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 160000000000 }),
            new common_1.FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
        ],
    }))),
    __param(1, (0, common_1.Session)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, doctor_dto_1.DoctorForm]),
    __metadata("design:returntype", Object)
], DoctorController.prototype, "uploadProfile", null);
__decorate([
    (0, common_1.Get)('/logout'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DoctorController.prototype, "signout", null);
__decorate([
    (0, common_1.Put)("/nid/upload"),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.UseInterceptors)((0, multer_1.FileInterceptor)('nidPdf', {
        storage: (0, multer_2.diskStorage)({
            destination: './uploads/doctor/nid',
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
    __param(1, (0, common_1.Session)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, doctor_dto_1.DoctorForm]),
    __metadata("design:returntype", Object)
], DoctorController.prototype, "uploadNidPdf", null);
__decorate([
    (0, common_1.Put)("/certificate/upload"),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    (0, common_1.UseInterceptors)((0, multer_1.FileInterceptor)('nidPdf', {
        storage: (0, multer_2.diskStorage)({
            destination: './uploads/doctor/nid',
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
    __param(1, (0, common_1.Session)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, doctor_dto_1.DoctorForm]),
    __metadata("design:returntype", Object)
], DoctorController.prototype, "uploadCertificatePdf", null);
__decorate([
    (0, common_1.Get)('/getimage/:name'),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], DoctorController.prototype, "getImages", null);
DoctorController = __decorate([
    (0, common_1.Controller)("/doctor"),
    __metadata("design:paramtypes", [doctor_service_1.DoctorService])
], DoctorController);
exports.DoctorController = DoctorController;
//# sourceMappingURL=doctor.controller.js.map