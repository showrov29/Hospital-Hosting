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
exports.BloodBankService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bloodBank_entity_1 = require("../entity/bloodBank.entity");
let BloodBankService = class BloodBankService {
    constructor(bloodBankRepo) {
        this.bloodBankRepo = bloodBankRepo;
    }
    getBloodBank() {
        return this.bloodBankRepo.find();
    }
    getBloodBankById(id) {
        return this.bloodBankRepo.findOneBy({ id });
    }
    getBloodBankByIdName(qry) {
        return this.bloodBankRepo.findOneBy({ id: qry.id });
    }
    insertBloodBank(mydto) {
        const adminaccount = new bloodBank_entity_1.BloodBankEntity();
        adminaccount.availableBloodDonar = mydto.availableBloodDonar;
        adminaccount.quantity = mydto.quantity;
        adminaccount.dateOfRecentCollection = mydto.dateOfRecentCollection;
        adminaccount.expiredBloodBags = mydto.expiredBloodBags;
        return this.bloodBankRepo.save(adminaccount);
    }
    updateBloodBankById(myData, id) {
        return this.bloodBankRepo.update(id, myData);
    }
    updateBloodBankPat(myData, id) {
        return this.bloodBankRepo.update(id, myData);
    }
    removeBloodBankById(id) {
        return this.bloodBankRepo.delete(id);
    }
};
BloodBankService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bloodBank_entity_1.BloodBankEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BloodBankService);
exports.BloodBankService = BloodBankService;
//# sourceMappingURL=bloodBank.service.js.map