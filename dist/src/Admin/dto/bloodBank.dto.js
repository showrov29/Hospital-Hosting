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
exports.updateBloodBankDto = exports.BloodBankDto = void 0;
const class_validator_1 = require("class-validator");
class BloodBankDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your name *" }),
    (0, class_validator_1.IsString)({ message: "Invalid. Address should be a string *" }),
    __metadata("design:type", String)
], BloodBankDto.prototype, "availableBloodDonar", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter the quantity of blood banks *" }),
    __metadata("design:type", String)
], BloodBankDto.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "enter date *" }),
    (0, class_validator_1.Matches)(/^\d{2}\/\d{2}\/\d{4}$/, { message: "Invalid date format.. mm/dd/yyyy" }),
    __metadata("design:type", String)
], BloodBankDto.prototype, "dateOfRecentCollection", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "enter expired blood bags*" }),
    __metadata("design:type", String)
], BloodBankDto.prototype, "expiredBloodBags", void 0);
exports.BloodBankDto = BloodBankDto;
class updateBloodBankDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your name *" }),
    (0, class_validator_1.IsString)({ message: "Invalid. Address should be a string *" }),
    __metadata("design:type", String)
], updateBloodBankDto.prototype, "availableBloodDonar", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter the helpline Number *" }),
    (0, class_validator_1.Length)(3, 3, { message: "Invalid helpline number*" }),
    __metadata("design:type", String)
], updateBloodBankDto.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Please enter your email address*" }),
    (0, class_validator_1.Matches)(/^\d{2}\/\d{2}\/\d{4}$/, { message: "Invalid date format.. mm/dd/yyyy" }),
    __metadata("design:type", String)
], updateBloodBankDto.prototype, "dateOfRecentCollection", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "enter expired blood bags*" }),
    __metadata("design:type", String)
], updateBloodBankDto.prototype, "expiredBloodBags", void 0);
exports.updateBloodBankDto = updateBloodBankDto;
//# sourceMappingURL=bloodBank.dto.js.map