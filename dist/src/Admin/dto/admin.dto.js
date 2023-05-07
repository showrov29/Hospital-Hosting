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
exports.UpdateAdminDto = exports.CreateAdminDto = void 0;
const class_validator_1 = require("class-validator");
class CreateAdminDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your name *" }),
    (0, class_validator_1.IsString)({ message: "Invalid name. Name should be a string *" }),
    (0, class_validator_1.Matches)(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/, { message: "Username must be minimum 4 characters, at least one letter and one number" }),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ message: "Invalid age" }),
    (0, class_validator_1.Min)(20, { message: "Sorry you are underage. You have to be at least 20 years old" }),
    __metadata("design:type", Number)
], CreateAdminDto.prototype, "age", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your password*" }),
    (0, class_validator_1.Matches)(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/, { message: "Password minimum 6 characters, at least one letter, one number and one special character" }),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "your gender*" }),
    (0, class_validator_1.Matches)(/^(?:male|female|other)$/ig, {
        message: " Invalid. Male / Female / other?"
    }),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your address *" }),
    (0, class_validator_1.IsString)({ message: "Invalid address. Address should be a string *" }),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your email address*" }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your contact Number *" }),
    (0, class_validator_1.Matches)(/^(?:\+88|88)?(01[3-9]\d{8})$/, { message: "Invalid contact Number. Only bangladeshi operator accepted" }),
    __metadata("design:type", String)
], CreateAdminDto.prototype, "contactNo", void 0);
exports.CreateAdminDto = CreateAdminDto;
class UpdateAdminDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your name *" }),
    (0, class_validator_1.IsString)({ message: "Invalid name. Name should be a string *" }),
    (0, class_validator_1.Matches)(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/, { message: "Username must be minimum 4 characters, at least one letter and one number" }),
    __metadata("design:type", String)
], UpdateAdminDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ message: "Invalid age" }),
    (0, class_validator_1.Min)(20, { message: "Sorry you are underage. You have to be at least 20 years old" }),
    __metadata("design:type", Number)
], UpdateAdminDto.prototype, "age", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your password*" }),
    (0, class_validator_1.Matches)(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/, { message: "Password minimum eight characters, at least one letter, one number and one special character" }),
    __metadata("design:type", String)
], UpdateAdminDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: "your gender?" }),
    __metadata("design:type", String)
], UpdateAdminDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your address *" }),
    (0, class_validator_1.IsString)({ message: "Invalid address. Address should be a string *" }),
    __metadata("design:type", String)
], UpdateAdminDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your email address*" }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateAdminDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your contact Number *" }),
    (0, class_validator_1.Matches)(/^(?:\+88|88)?(01[3-9]\d{8})$/, { message: "Invalid contact Number. Only bangladeshi operator accepted" }),
    __metadata("design:type", String)
], UpdateAdminDto.prototype, "contactNo", void 0);
exports.UpdateAdminDto = UpdateAdminDto;
//# sourceMappingURL=admin.dto.js.map