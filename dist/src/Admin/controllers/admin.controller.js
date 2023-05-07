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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const admin_dto_1 = require("../dto/admin.dto");
const admin_service_1 = require("../services/admin.service");
const hospital_service_1 = require("../services/hospital.service");
const session_guard_1 = require("../session.guard");
let AdminController = class AdminController {
    constructor(adminService, hospitalService) {
        this.adminService = adminService;
        this.hospitalService = hospitalService;
    }
    getAdmin() {
        return this.adminService.getAdmin();
    }
    getAdminById(id) {
        return this.adminService.getAdminById(+id);
    }
    getAdminByIdName(qry) {
        return this.adminService.getAdminByIdName(qry);
    }
    changePass(session, password) {
        console.log(session.email);
        return this.adminService.changePass(password, session.email);
    }
    insertAdmin(mydto) {
        return this.adminService.insertAdmin(mydto);
    }
    signin(session, mydto) {
        if (this.adminService.signin(mydto)) {
            session.email = mydto.email;
            console.log(session.email);
            return { message: "success" };
        }
        else {
            return { message: "invalid credentials" };
        }
    }
    updateAdminById(mydto, id) {
        return this.adminService.updateAdminById(mydto, id);
    }
    updateAdminPat(id, updateAdminDto) {
        return this.adminService.updateAdminPat(updateAdminDto, id);
    }
    removeAdminById(id) {
        return this.adminService.removeAdminById(+id);
    }
    getAdminByHospitalId(id) {
        return this.hospitalService.getAdminByHospitalId(id);
    }
    getHospitalsByAdminId(id) {
        return this.adminService.getHospitalsByAdminId(id);
    }
    getDoctorsByAdminId(id) {
        return this.adminService.getDoctorsByAdminId(id);
    }
    signup(body, file) {
        return this.adminService.signup(body, file.filename);
    }
    sendEmail(mydata) {
        return this.adminService.sendEmail(mydata);
    }
    signout(session) {
        if (session.destroy()) {
            return { message: "you are logged out" };
        }
        else {
            throw new common_1.UnauthorizedException("invalid actions");
        }
    }
};
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getAdmin", null);
__decorate([
    (0, common_1.Get)('/getAdmin/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getAdminById", null);
__decorate([
    (0, common_1.Get)('findAdmin'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getAdminByIdName", null);
__decorate([
    (0, common_1.Put)('/changePass/'),
    (0, common_1.UseGuards)(session_guard_1.AdminGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Body)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "changePass", null);
__decorate([
    (0, common_1.Post)('/insertAdmin'),
    (0, common_1.UseGuards)(session_guard_1.AdminGuard),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.CreateAdminDto]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "insertAdmin", null);
__decorate([
    (0, common_1.Get)('/signin'),
    __param(0, (0, common_1.Session)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, admin_dto_1.CreateAdminDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "signin", null);
__decorate([
    (0, common_1.Put)('/updateAdmin/:id'),
    (0, common_1.UseGuards)(session_guard_1.AdminGuard),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.UpdateAdminDto, Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "updateAdminById", null);
__decorate([
    (0, common_1.Patch)('/updateAdminPat/:id'),
    (0, common_1.UseGuards)(session_guard_1.AdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, admin_dto_1.UpdateAdminDto]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "updateAdminPat", null);
__decorate([
    (0, common_1.Delete)('/rmvAdmin/:id'),
    (0, common_1.UseGuards)(session_guard_1.AdminGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "removeAdminById", null);
__decorate([
    (0, common_1.Get)('findAdminByHospital/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getAdminByHospitalId", null);
__decorate([
    (0, common_1.Get)('/findHospitalsByAdmin/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getHospitalsByAdminId", null);
__decorate([
    (0, common_1.Get)('/findDoctorsByAdmin/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "getDoctorsByAdminId", null);
__decorate([
    (0, common_1.Post)("signup"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', { storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: function (req, file, cb) {
                cb(null, Date.now() + file.originalname);
            }
        })
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 16000000000 }),
            new common_1.FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.CreateAdminDto, Object]),
    __metadata("design:returntype", Object)
], AdminController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('/sendemail'),
    (0, common_1.UseGuards)(session_guard_1.AdminGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "sendEmail", null);
__decorate([
    (0, common_1.Get)('/signout'),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "signout", null);
AdminController = __decorate([
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService,
        hospital_service_1.HospitalService])
], AdminController);
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map