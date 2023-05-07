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
exports.MedicineController = void 0;
const medicine_dto_1 = require("./medicine.dto");
const common_1 = require("@nestjs/common");
const medicine_service_1 = require("./medicine.service");
let MedicineController = class MedicineController {
    constructor(medicineService) {
        this.medicineService = medicineService;
    }
    getMedicine() {
        return this.medicineService.getAllMedicine();
    }
    getMedicineById(id) {
        return this.medicineService.getMedicine(id);
    }
    editMedicine(id, data) {
        return this.medicineService.editMedicine(id, data);
    }
    addMedicine(data) {
        return this.medicineService.addMedicine(data);
        ;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], MedicineController.prototype, "getMedicine", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], MedicineController.prototype, "getMedicineById", null);
__decorate([
    (0, common_1.Put)("/edit/:id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, medicine_dto_1.MedicineDTO]),
    __metadata("design:returntype", Object)
], MedicineController.prototype, "editMedicine", null);
__decorate([
    (0, common_1.Post)("/postmedicine"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [medicine_dto_1.MedicineDTO]),
    __metadata("design:returntype", Object)
], MedicineController.prototype, "addMedicine", null);
MedicineController = __decorate([
    (0, common_1.Controller)("/medicine"),
    __metadata("design:paramtypes", [medicine_service_1.MedicineService])
], MedicineController);
exports.MedicineController = MedicineController;
//# sourceMappingURL=medicine.controller.js.map