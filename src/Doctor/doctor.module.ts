import { Module } from "@nestjs/common";
import { DoctorController } from "./doctor.controller"
import { DoctorService } from "./doctor.service"
import { TypeOrmModule } from "@nestjs/typeorm";
import { DoctorEntity } from "./doctor.entity"
import { MedicineService } from "./medicine.service"
import { MedicineController } from "./medicine.controller"
import { MedicineEntity } from "./medicine.entity"
import { OperationService } from "./operation.service"
import { OperationController } from "./operation.controller"
import { OperationEntity } from "./operation.entity"
import { TestService } from "./test.service"
import { TestController } from "./test.controller"
import { TestEntity } from "./test.entity"
import { MailerModule } from '@nestjs-modules/mailer';

@Module({

    imports: [
        // MailerModule.forRoot({
        //     transport: {
        //       host: 'smtp.gmail.com',
        //                port: 465,
        //                ignoreTLS: true,
        //                secure: true,
        //                auth: {
        //                    user: 'mdsakib2020year@gmail.com',
        //                    pass: 'ntbmnlpxteusifps'
        //                },
        //               }
        //   }),
        
        TypeOrmModule.forFeature([DoctorEntity, MedicineEntity, TestEntity, OperationEntity])],
    providers: [DoctorService, MedicineService, TestService, OperationService],
    controllers: [DoctorController, MedicineController, TestController, OperationController],
})
export class DoctorModule {}
