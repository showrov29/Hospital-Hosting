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
exports.OperationDTO = void 0;
const class_validator_1 = require("class-validator");
class OperationDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'id is required' }),
    (0, class_validator_1.IsInt)({ message: 'id must be ineger value' }),
    __metadata("design:type", Number)
], OperationDTO.prototype, "ot_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'room number is required' }),
    __metadata("design:type", String)
], OperationDTO.prototype, "room_number", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'id is required' }),
    __metadata("design:type", String)
], OperationDTO.prototype, "ot_date", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'id is required' }),
    __metadata("design:type", String)
], OperationDTO.prototype, "ot_time", void 0);
exports.OperationDTO = OperationDTO;
//# sourceMappingURL=operation.dto.js.map