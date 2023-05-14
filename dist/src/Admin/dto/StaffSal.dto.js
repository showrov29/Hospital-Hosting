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
exports.UpdateStaffSalDto = exports.StaffSalDto = void 0;
const class_validator_1 = require("class-validator");
class StaffSalDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your name *" }),
    (0, class_validator_1.IsString)({ message: "Invalid. salary field is string *" }),
    __metadata("design:type", String)
], StaffSalDto.prototype, "salary", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter the date *" }),
    (0, class_validator_1.Matches)(/^\d{2}\/\d{2}\/\d{4}$/, { message: "Invalid date format.. mm/dd/yyyy" }),
    __metadata("design:type", String)
], StaffSalDto.prototype, "dateOfPayment", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Enter the month*" }),
    (0, class_validator_1.IsString)({ message: "Invalid. Month field is string *" }),
    __metadata("design:type", String)
], StaffSalDto.prototype, "month", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "what's the status*" }),
    (0, class_validator_1.IsString)({ message: "Invalid. Status field is string *" }),
    __metadata("design:type", String)
], StaffSalDto.prototype, "status", void 0);
exports.StaffSalDto = StaffSalDto;
class UpdateStaffSalDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: "please enter salary *" }),
    (0, class_validator_1.IsString)({ message: "Invalid. salary field is string *" }),
    __metadata("design:type", String)
], UpdateStaffSalDto.prototype, "salary", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter the date *" }),
    (0, class_validator_1.Matches)(/^\d{2}\/\d{2}\/\d{4}$/, { message: "Invalid date format.. mm/dd/yyyy" }),
    __metadata("design:type", String)
], UpdateStaffSalDto.prototype, "dateOfPayment", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Enter the month*" }),
    (0, class_validator_1.IsString)({ message: "Invalid. Month field is string *" }),
    __metadata("design:type", String)
], UpdateStaffSalDto.prototype, "month", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: "what's the status*" }),
    (0, class_validator_1.IsString)({ message: "Invalid. Status field is string *" }),
    __metadata("design:type", String)
], UpdateStaffSalDto.prototype, "status", void 0);
exports.UpdateStaffSalDto = UpdateStaffSalDto;
//# sourceMappingURL=staffSal.dto.js.map