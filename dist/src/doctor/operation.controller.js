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
exports.OperationController = void 0;
const operation_dto_1 = require("./operation.dto");
const common_1 = require("@nestjs/common");
const operation_service_1 = require("./operation.service");
let OperationController = class OperationController {
    constructor(operationService) {
        this.operationService = operationService;
    }
    getOperation() {
        return this.operationService.getAllOperation();
    }
    getOperationById(id) {
        return this.operationService.getOperation(id);
    }
    editOperation(id, data) {
        return this.operationService.editOperation(id, data);
    }
    addOperation(data) {
        return this.operationService.addOperation(data);
        ;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], OperationController.prototype, "getOperation", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], OperationController.prototype, "getOperationById", null);
__decorate([
    (0, common_1.Put)("/edit/:id"),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, operation_dto_1.OperationDTO]),
    __metadata("design:returntype", Object)
], OperationController.prototype, "editOperation", null);
__decorate([
    (0, common_1.Post)("/postoperation"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [operation_dto_1.OperationDTO]),
    __metadata("design:returntype", Object)
], OperationController.prototype, "addOperation", null);
OperationController = __decorate([
    (0, common_1.Controller)("/operation"),
    __metadata("design:paramtypes", [operation_service_1.OperationService])
], OperationController);
exports.OperationController = OperationController;
//# sourceMappingURL=operation.controller.js.map