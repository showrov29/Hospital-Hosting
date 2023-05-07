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
exports.updateHospitalDto = exports.HospitalDto = void 0;
const class_validator_1 = require("class-validator");
class HospitalDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your name *" }),
    (0, class_validator_1.IsString)({ message: "Invalid name. Name should be a string *" }),
    __metadata("design:type", String)
], HospitalDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your name *" }),
    (0, class_validator_1.IsString)({ message: "Invalid. Address should be a string *" }),
    __metadata("design:type", String)
], HospitalDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter the helpline Number *" }),
    (0, class_validator_1.Length)(3, 3, { message: "Invalid helpline number*" }),
    __metadata("design:type", String)
], HospitalDto.prototype, "helpline", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your email address*" }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], HospitalDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter the available ambulance*" }),
    __metadata("design:type", Number)
], HospitalDto.prototype, "ambulanceNumber", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your Id*" }),
    __metadata("design:type", Object)
], HospitalDto.prototype, "admin", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter bloodBank ID*" }),
    __metadata("design:type", Object)
], HospitalDto.prototype, "bloodBank", void 0);
exports.HospitalDto = HospitalDto;
class updateHospitalDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], updateHospitalDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your name *" }),
    (0, class_validator_1.IsString)({ message: "Invalid name. Name should be a string *" }),
    __metadata("design:type", String)
], updateHospitalDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your name *" }),
    (0, class_validator_1.IsString)({ message: "Invalid. Address should be a string *" }),
    __metadata("design:type", String)
], updateHospitalDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter the helpline Number *" }),
    (0, class_validator_1.Length)(3, 3, { message: "Invalid helpline number*" }),
    __metadata("design:type", String)
], updateHospitalDto.prototype, "helpline", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your email address*" }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], updateHospitalDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter the available ambulance*" }),
    __metadata("design:type", Number)
], updateHospitalDto.prototype, "ambulanceNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your Id*" }),
    __metadata("design:type", Object)
], updateHospitalDto.prototype, "admin", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter bloodBank ID*" }),
    __metadata("design:type", Object)
], updateHospitalDto.prototype, "bloodBank", void 0);
exports.updateHospitalDto = updateHospitalDto;
//# sourceMappingURL=hospital.dto.js.map