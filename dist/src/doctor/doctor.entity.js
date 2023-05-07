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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorEntity = void 0;
const typeorm_1 = require("typeorm");
let DoctorEntity = class DoctorEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DoctorEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], DoctorEntity.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], DoctorEntity.prototype, "contact", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorEntity.prototype, "specialist", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], DoctorEntity.prototype, "fees", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], DoctorEntity.prototype, "designation", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, default: null }),
    __metadata("design:type", String)
], DoctorEntity.prototype, "profilePic", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, default: null }),
    __metadata("design:type", String)
], DoctorEntity.prototype, "nidPdf", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, default: null }),
    __metadata("design:type", String)
], DoctorEntity.prototype, "certificatePdf", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorEntity.prototype, "bmdc_reg_no", void 0);
DoctorEntity = __decorate([
    (0, typeorm_1.Entity)("doctor")
], DoctorEntity);
exports.DoctorEntity = DoctorEntity;
//# sourceMappingURL=doctor.entity.js.map