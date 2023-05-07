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
exports.DocSalController = void 0;
const common_1 = require("@nestjs/common");
const docSal_dto_1 = require("../dto/docSal.dto");
const docSal_service_1 = require("../services/docSal.service");
let DocSalController = class DocSalController {
    constructor(docSalService) {
        this.docSalService = docSalService;
    }
    getDocSal() {
        return this.docSalService.getDocSal();
    }
    getDocSalById(id) {
        return this.docSalService.getDocSalById(+id);
    }
    getDocSalByIdName(qry) {
        return this.docSalService.getDocSalByIdName(qry);
    }
    insertDocSal(mydto) {
        return this.docSalService.insertDocSal(mydto);
    }
    updateDocSalById(mydto, id) {
        return this.docSalService.updateDocSalById(mydto, id);
    }
    updateDocPat(id, docSalDto) {
        return this.docSalService.updateDocPat(docSalDto, id);
    }
    removeDocSalById(id) {
        return this.docSalService.removeDocSalById(+id);
    }
};
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DocSalController.prototype, "getDocSal", null);
__decorate([
    (0, common_1.Get)('findDocSal/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocSalController.prototype, "getDocSalById", null);
__decorate([
    (0, common_1.Get)('findDocSal'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], DocSalController.prototype, "getDocSalByIdName", null);
__decorate([
    (0, common_1.Post)('/insertDocSal'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [docSal_dto_1.DocSalDto]),
    __metadata("design:returntype", Object)
], DocSalController.prototype, "insertDocSal", null);
__decorate([
    (0, common_1.Put)('/updateDocSal/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [docSal_dto_1.DocSalDto, Number]),
    __metadata("design:returntype", Object)
], DocSalController.prototype, "updateDocSalById", null);
__decorate([
    (0, common_1.Patch)('/updateDocSalPat/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, docSal_dto_1.UpdateDocSalDto]),
    __metadata("design:returntype", void 0)
], DocSalController.prototype, "updateDocPat", null);
__decorate([
    (0, common_1.Delete)('/rmvDocSal/:id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], DocSalController.prototype, "removeDocSalById", null);
DocSalController = __decorate([
    (0, common_1.Controller)('docSal'),
    __metadata("design:paramtypes", [docSal_service_1.DocSalService])
], DocSalController);
exports.DocSalController = DocSalController;
//# sourceMappingURL=docSal.controller.js.map