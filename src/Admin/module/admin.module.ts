import { Module } from "@nestjs/common";
import { AdminController } from "../controllers/admin.controller";
import { HospitalService } from "../services/hospital.service";
import { AdminService } from "../services/admin.service";
import { HospitalController } from "../controllers/hospital.controller";
import { AdminEntity } from "../entity/admin.entity";
import { HospitalEntity } from "../entity/hospital.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DocSalEntity } from "../entity/docSal.entity";
import { DocSalController } from "../controllers/docSal.controller";
import { DocSalService } from "../services/docSal.service";
import { BloodBankEntity } from "../entity/bloodBank.entity";
import { BloodBankController } from "../controllers/bloodBank.controller";
import { BloodBankService } from "../services/bloodBank.service";
import { MailerModule } from "@nestjs-modules/mailer";
import { StaffSalEntity } from "../entity/staffSal.entity";
import { StaffSalController } from "../controllers/satffSal.controller";
import { StaffSalService } from "../services/StaffSal.service";
@Module(
    {
        imports: [
            // MailerModule.forRoot({
            //     transport: {
            //       host: 'smtp.gmail.com',
            //                port: 465,
            //                ignoreTLS: true,
            //                secure: true,
            //                auth: {
            //                    user: 'tamannasristy2@gmail.com',
            //                    pass: 'xlzixgtlgxgmvszy'
            //                },
            //               }
            //   }),
            TypeOrmModule.forFeature([AdminEntity, HospitalEntity, DocSalEntity, BloodBankEntity, StaffSalEntity])],
        controllers: [AdminController, HospitalController, DocSalController, BloodBankController, StaffSalController],
        providers: [AdminService, HospitalService, DocSalService, BloodBankService, StaffSalService],
    }
)
export class AdminModule{
}