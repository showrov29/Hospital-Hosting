/// <reference types="multer" />
import { ReportService } from '../services/report.service';
export declare class ReportController {
    private readonly reportService;
    constructor(reportService: ReportService);
    getAmbulanceByPhone(id: number): any;
    getReportById(id: number): any;
    editPrescription(file: Express.Multer.File, id: number, data: any): any;
    getImages(name: any, res: any): void;
    addUser(data: any): any;
}
