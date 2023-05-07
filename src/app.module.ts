import { PatientModule } from './Patient/module/patient.module';
import { PatientController } from './Patient/controllers/patient.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DoctorModule } from './doctor/doctor.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './Admin/module/admin.module';
// import { PatientService } from './Patient/services/patient.service';

@Module({
  imports: [PatientModule ,AdminModule, DoctorModule, TypeOrmModule.forRoot(
    { type: 'postgres',
     host: 'localhost',
     port: 5432,
     username: 'postgres',
     password: 'root',
     database: 'healthcare',
     autoLoadEntities: true,
     synchronize: true,
   }
   ),],

  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
