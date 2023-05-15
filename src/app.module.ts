import { PatientModule } from './Patient/module/patient.module';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';

// import { PatientService } from './Patient/services/patient.service';

@Module({
  imports: [PatientModule , TypeOrmModule.forRoot(
    { type: 'postgres',
    host: 'containers-us-west-147.railway.app',
    port: 7801,
    username: 'postgres',
    password: '1eCpV4zoggp23dcpyDIF',
    database: 'railway',
    autoLoadEntities: true,
    synchronize: true,
   }
   ),],

  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
