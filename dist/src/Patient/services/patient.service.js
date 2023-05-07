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
exports.PatientService = void 0;
const patient_entity_1 = require("./../Entities/patient.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const bcrypt = require("bcrypt");
let PatientService = class PatientService {
    constructor(patinetReppo) {
        this.patinetReppo = patinetReppo;
    }
    getAllPatients() {
        return this.patinetReppo.find();
    }
    async login(data) {
        const salt = await bcrypt.genSalt();
        const user = await this.patinetReppo.findOneBy({ email: data.email });
        if (user != null) {
            const isMatch = await bcrypt.compare(data.password, user.password);
            if (isMatch) {
                return { user: user };
            }
            else {
                return { passErr: "Iincorrect Password" };
            }
        }
        else {
            return { emailErr: "Iincorrect Email" };
        }
    }
    deletePatient(id) {
        return this.patinetReppo.delete(id);
    }
    getPatientById(id) {
        return this.patinetReppo.findOneBy({ id: id });
    }
    async editPatientPass(id, data) {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;
        return this.patinetReppo.update(id, { password: data.password });
    }
    async editPatientDetails(id, data) {
        return (this.patinetReppo.update(id, data));
    }
    uploadProfilePic(id, data) {
        this.patinetReppo.update(id, data);
        return (this.patinetReppo.update(id, { profilePic: data.profilePic }));
    }
    async addUser(data) {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;
        return this.patinetReppo.save(data);
    }
};
PatientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(patient_entity_1.PatientEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PatientService);
exports.PatientService = PatientService;
//# sourceMappingURL=patient.service.js.map