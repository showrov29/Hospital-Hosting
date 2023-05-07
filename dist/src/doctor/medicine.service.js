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
exports.MedicineService = void 0;
const medicine_entity_1 = require("./medicine.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let MedicineService = class MedicineService {
    constructor(medicineReppo) {
        this.medicineReppo = medicineReppo;
    }
    getAllMedicine() {
        return this.medicineReppo.find();
    }
    getMedicine(id) {
        return this.medicineReppo.findOneBy({ id });
    }
    editMedicine(id, data) {
        return this.medicineReppo.update(id, data);
    }
    addMedicine(medicine) {
        const data = new medicine_entity_1.MedicineEntity();
        data.medname = medicine.medname;
        data.expdate = medicine.expdate;
        data.price = medicine.price;
        return this.medicineReppo.save(data);
    }
};
MedicineService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(medicine_entity_1.MedicineEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MedicineService);
exports.MedicineService = MedicineService;
//# sourceMappingURL=medicine.service.js.map