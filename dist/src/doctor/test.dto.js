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
exports.TestDTO = void 0;
const class_validator_1 = require("class-validator");
class TestDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'id is required' }),
    (0, class_validator_1.IsInt)({ message: 'id must be ineger value' }),
    __metadata("design:type", Number)
], TestDTO.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Name is required' }),
    __metadata("design:type", String)
], TestDTO.prototype, "test_name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'expdate is required' }),
    __metadata("design:type", String)
], TestDTO.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'report date is required' }),
    __metadata("design:type", String)
], TestDTO.prototype, "delivery_date", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'price must be ineger value' }),
    __metadata("design:type", Number)
], TestDTO.prototype, "fees", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'refference_by is required' }),
    __metadata("design:type", String)
], TestDTO.prototype, "refference_by", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'patient_no must be ineger value' }),
    __metadata("design:type", Number)
], TestDTO.prototype, "patient_no", void 0);
exports.TestDTO = TestDTO;
//# sourceMappingURL=test.dto.js.map