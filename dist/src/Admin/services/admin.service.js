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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const admin_entity_1 = require("../entity/admin.entity");
const bcrypt = require("bcrypt");
const mailer_1 = require("@nestjs-modules/mailer");
let AdminService = class AdminService {
    constructor(adminRepo, mailerService) {
        this.adminRepo = adminRepo;
        this.mailerService = mailerService;
    }
    getAdmin() {
        return this.adminRepo.find();
    }
    getAdminById(id) {
        return this.adminRepo.findOneBy({ id });
    }
    changePass(password, email) {
        return this.adminRepo.update({ email: email }, { password: password });
    }
    getAdminByIdName(qry) {
        return this.adminRepo.findOneBy({ id: qry.id, name: qry.name });
    }
    insertAdmin(mydto) {
        const adminAccount = new admin_entity_1.AdminEntity();
        adminAccount.name = mydto.name;
        adminAccount.age = mydto.age;
        adminAccount.password = mydto.password;
        adminAccount.gender = mydto.gender;
        adminAccount.address = mydto.address;
        adminAccount.email = mydto.email;
        adminAccount.contactNo = mydto.contactNo;
        return this.adminRepo.save(adminAccount);
    }
    updateAdminById(myData, id) {
        return this.adminRepo.update(id, { name: myData.name, age: myData.age, password: myData.password, gender: myData.gender, address: myData.address, email: myData.email, contactNo: myData.contactNo });
    }
    updateAdminPat(myData, id) {
        return this.adminRepo.update(id, myData);
    }
    removeAdminById(id) {
        return this.adminRepo.delete(id);
    }
    async addUser(data) {
        console.log("data", data);
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;
        return this.adminRepo.save(data);
    }
    async signup(mydto, filename) {
        const salt = await bcrypt.genSalt();
        const hassedpassed = await bcrypt.hash(mydto.password, salt);
        mydto.password = hassedpassed;
        const adminAccount = new admin_entity_1.AdminEntity();
        adminAccount.name = mydto.name;
        adminAccount.age = mydto.age;
        adminAccount.password = mydto.password;
        adminAccount.gender = mydto.gender;
        adminAccount.address = mydto.address;
        adminAccount.email = mydto.email;
        adminAccount.contactNo = mydto.contactNo;
        adminAccount.filename = filename;
        console.log("service", adminAccount);
        return this.adminRepo.save(adminAccount);
    }
    async signin(mydto) {
        console.log(mydto.password);
        const mydata = await this.adminRepo.findOneBy({ email: mydto.email });
        const isMatch = await bcrypt.compare(mydto.password, mydata.password);
        if (isMatch) {
            return 1;
        }
        else {
            return 0;
        }
    }
    getHospitalsByAdminId(id) {
    }
    getDoctorsByAdminId(id) {
    }
    async sendEmail(mydata) {
        return await this.mailerService.sendMail({
            to: mydata.email,
            subject: mydata.subject,
            text: mydata.text,
        });
    }
};
AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(admin_entity_1.AdminEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        mailer_1.MailerService])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map