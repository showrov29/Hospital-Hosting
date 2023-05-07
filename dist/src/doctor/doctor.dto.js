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
exports.DoctorForm = void 0;
const class_validator_1 = require("class-validator");
class DoctorForm {
}
__decorate([
    (0, class_validator_1.MinLength)(3, { message: 'name must be at least 3 characters long' }),
    (0, class_validator_1.MaxLength)(30, { message: 'name cannot be longer than 30 characters' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name is required' }),
    __metadata("design:type", String)
], DoctorForm.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Invalid email format' }),
    __metadata("design:type", String)
], DoctorForm.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required' }),
    __metadata("design:type", String)
], DoctorForm.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'Age must be ineger value' }),
    __metadata("design:type", Number)
], DoctorForm.prototype, "age", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'contact number must be ineger value' }),
    __metadata("design:type", Number)
], DoctorForm.prototype, "contact", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'specialist is required' }),
    __metadata("design:type", String)
], DoctorForm.prototype, "specialist", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], DoctorForm.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'bmdc_reg_no is required' }),
    __metadata("design:type", String)
], DoctorForm.prototype, "bmdc_reg_no", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your Id*" }),
    __metadata("design:type", Object)
], DoctorForm.prototype, "admin", void 0);
exports.DoctorForm = DoctorForm;
//# sourceMappingURL=doctor.dto.js.map