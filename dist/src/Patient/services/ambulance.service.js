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
exports.AmbulanceService = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const ambulance_entity_1 = require("../Entities/ambulance.entity");
const typeorm_2 = require("@nestjs/typeorm");
let AmbulanceService = class AmbulanceService {
    constructor(ambulanceReppo) {
        this.ambulanceReppo = ambulanceReppo;
    }
    getAllAmbulance() {
        return this.ambulanceReppo.find();
    }
    getAmbulance(id) {
        return this.ambulanceReppo.findOneBy({ id });
    }
    getAmbulanceByProfile(id) {
        return this.ambulanceReppo.findBy({ patientId: id });
    }
    deleteAmbulance(id) {
        return this.ambulanceReppo.delete(id);
    }
    editAmbulance(id, data) {
        return this.ambulanceReppo.update(id, data);
    }
    addAmbulance(ambulance) {
        const data = new ambulance_entity_1.AmbulanceEntity();
        data.driverName = ambulance.driverName;
        data.phone = ambulance.phone;
        data.rent = ambulance.rent;
        data.status = ambulance.status;
        data.patientId = ambulance.patientA;
        data.location = ambulance.location;
        return this.ambulanceReppo.save(data);
    }
    getAmbulanceByStatus(na) {
        return this.ambulanceReppo.findBy({ status: na });
    }
};
AmbulanceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(ambulance_entity_1.AmbulanceEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AmbulanceService);
exports.AmbulanceService = AmbulanceService;
//# sourceMappingURL=ambulance.service.js.map