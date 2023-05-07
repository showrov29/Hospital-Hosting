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
exports.DoctorService = void 0;
const common_1 = require("@nestjs/common");
const doctor_entity_1 = require("./doctor.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const dist_1 = require("@nestjs-modules/mailer/dist");
let DoctorService = class DoctorService {
    constructor(doctorRepo, mailerService) {
        this.doctorRepo = doctorRepo;
        this.mailerService = mailerService;
    }
    getHello() {
        return this.doctorRepo.find();
    }
    getAllDoctors() {
        return this.doctorRepo.find();
    }
    getDoctorById(id) {
        return this.doctorRepo.findOneBy({ id });
    }
    deleteDoctor(id) {
        return "delete  doctor by id : " + id;
    }
    editDoctor(qry) {
        return "Doctor id : " + qry.id + " and name : " + qry.name;
    }
    register(mydto) {
        const doctoraccount = new doctor_entity_1.DoctorEntity();
        doctoraccount.name = mydto.name;
        doctoraccount.email = mydto.email;
        doctoraccount.password = mydto.password;
        doctoraccount.age = mydto.age;
        doctoraccount.contact = mydto.contact;
        doctoraccount.specialist = mydto.specialist;
        doctoraccount.designation = mydto.designation;
        doctoraccount.bmdc_reg_no = mydto.bmdc_reg_no;
        doctoraccount.address = mydto.address;
        doctoraccount.profilePic = mydto.profilePic;
        return this.doctorRepo.save(doctoraccount);
    }
    remove(name) {
        return "Removed Medicine : " + name;
    }
    updatedoc(id, name, email, password, age) {
        return "Update Doctor name: " + name + " id:  " + id + " email: " + email + " password: " + password + " age: " + age;
    }
    updateDoctorbyid(id, name, email, password, age) {
        return "Update doctor where id " + id + " name:  " + name + " email: " + email + " password: " + password + " age: " + age;
    }
    getPatientById(qry) {
        return "Patient id : " + qry.id;
    }
    getHospital(name) {
        return "Get hospital by name : " + name;
    }
    pres(medicine, id) {
        return "Medicine no :" + id + "and medicine name: " + medicine;
    }
    test(test, id) {
        return "Number of test :" + id + "and test name: " + test;
    }
    uploadProfilePic(id, data) {
        this.doctorRepo.update(id, data);
        return (this.doctorRepo.update(id, { profilePic: data.profilePic }));
    }
    async login(data) {
        const salt = await bcrypt.genSalt();
        const doc = await this.doctorRepo.findOneBy({ email: data.email });
        if (doc != null) {
            if (data.password == doc.password) {
                return { doc: doc };
            }
            else {
                return { passErr: "invalid password" };
            }
        }
        else {
            return { emailErr: "invalid email" };
        }
    }
    async registerid(data) {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;
        return this.doctorRepo.save(data);
    }
    uploadNidPdf(id, data) {
        this.doctorRepo.update(id, data);
        return (this.doctorRepo.update(id, { nidPdf: data.nidPdf }));
    }
    async addNid(data) {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;
        return this.doctorRepo.save(data);
    }
    uploadCertificatePdf(id, data) {
        this.doctorRepo.update(id, data);
        return (this.doctorRepo.update(id, { certificatePdf: data.certificatePdf }));
    }
    async addCertificate(data) {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;
        return this.doctorRepo.save(data);
    }
    async sendEmail(emailData) {
        return await this.mailerService.sendMail({
            to: emailData.email,
            subject: 'Absence mail',
            text: "sorry today i am busy"
        });
    }
};
DoctorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(doctor_entity_1.DoctorEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        dist_1.MailerService])
], DoctorService);
exports.DoctorService = DoctorService;
//# sourceMappingURL=doctor.service.js.map