import { Repository } from 'typeorm';
import { ReportEntity } from '../Entities/report.entiry';
export declare class ReportService {
    private reportRepo;
    constructor(reportRepo: Repository<ReportEntity>);
    getReportByPhone(id: any): any;
    getReportById(id: any): any;
    editReport(id: any, data: any): any;
    addReport(data: any): any;
}
