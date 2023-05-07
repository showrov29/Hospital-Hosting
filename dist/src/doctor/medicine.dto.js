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
exports.MedicineDTO = void 0;
const class_validator_1 = require("class-validator");
class MedicineDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'id is required' }),
    (0, class_validator_1.IsInt)({ message: 'id must be ineger value' }),
    __metadata("design:type", Number)
], MedicineDTO.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Name is required' }),
    __metadata("design:type", String)
], MedicineDTO.prototype, "medname", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'expdate is required' }),
    __metadata("design:type", String)
], MedicineDTO.prototype, "expdate", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'price must be ineger value' }),
    __metadata("design:type", Number)
], MedicineDTO.prototype, "price", void 0);
exports.MedicineDTO = MedicineDTO;
//# sourceMappingURL=medicine.dto.js.map