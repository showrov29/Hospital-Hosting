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
exports.OperationService = void 0;
const operation_entity_1 = require("./operation.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let OperationService = class OperationService {
    constructor(operationReppo) {
        this.operationReppo = operationReppo;
    }
    getAllOperation() {
        return this.operationReppo.find();
    }
    getOperation(id) {
        return this.operationReppo.findOneBy({ id });
    }
    editOperation(id, data) {
        return this.operationReppo.update(id, data);
    }
    addOperation(operation) {
        const data = new operation_entity_1.OperationEntity();
        data.room_number = operation.room_number;
        data.ot_date = operation.ot_date;
        data.ot_time = operation.ot_time;
        return this.operationReppo.save(data);
    }
};
OperationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(operation_entity_1.OperationEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OperationService);
exports.OperationService = OperationService;
//# sourceMappingURL=operation.service.js.map