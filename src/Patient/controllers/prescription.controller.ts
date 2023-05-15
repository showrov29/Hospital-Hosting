import { PrescriptionDTO } from './../DTOs/prescription.dto';
import { PrescriptionsService } from './../services/prescription.service';
import { PatientService } from './../services/patient.service';
import { Body, Controller, Delete, FileTypeValidator, Get, MaxFileSizeValidator, Param, ParseFilePipe, ParseIntPipe, Post, Put, Res, Session, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { AmbulanceDTO } from "../DTOs/ambulance.dto";
import { SessionGuardP } from '../session.guard';

import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller("/prescription")
export class PrescriptionController{

    constructor(private readonly prescriptionService: PrescriptionsService){}
    @Post("/prescribe")
    @UseInterceptors(FileInterceptor('pdf',{
        storage:diskStorage({
            destination:'./uploads/prescription',
            filename: function(req,file,cb){
                cb(null,Date.now()+file.originalname);
            }
        })
    }))
    // @UseGuards(SessionGuardP)
    @UsePipes(new ValidationPipe())
    addPrescription(@Body() data:PrescriptionDTO): any{
       
        return this.prescriptionService.addPrescription(data);
    }

    @Get("/myprescription/:id")
    // @UseGuards(SessionGuard)
    getPrescriptionByPatinetId(@Param('id',ParseIntPipe) id:number): any{
        
        return this.prescriptionService.getPrescriptionByPatientId(id);
    }
   
    @Get()
    getPrescription(): any{
        return this.prescriptionService.getAllPrescription();
    }
    @Get("/show/:id")
    getPrescriptionById(@Param('id',ParseIntPipe) id:number): any{
        return this.prescriptionService.getPrescriptionById(id);
    }

    @Delete("/delete/:id")
    @UseGuards(SessionGuardP)
    deleteAmbulance(@Param('id',ParseIntPipe) id:number ): any{
        return this.prescriptionService.deletePrescription(id);
    }
    @Put("/edit/:id")
    // @UseGuards(SessionGuardP)
    @UseInterceptors(FileInterceptor('pdf',{
        storage:diskStorage({
            destination:'./uploads/prescription',
            filename: function(req,file,cb){
                cb(null,Date.now()+file.originalname);
            }
        })
    }))
    editPrescription(@UploadedFile(new ParseFilePipe({
        validators: [
            new MaxFileSizeValidator({ maxSize: 1600000 }),
            new FileTypeValidator({ fileType: 'pdf' }),
          ],
    }),) file:Express.Multer.File ,@Param('id',ParseIntPipe) id:number , @Body() data:PrescriptionDTO ): any{
        
       
        data.pdf=file.filename;
        console.log(data);
        

        return this.prescriptionService.editPrescription(id,data)
    }


    @Get('/getprescription/:name')
    // @UseGuards(SessionGuardP)
    getImages(@Param('name') name, @Res() res) {
      res.sendFile(name,{ root: './uploads/prescription' })
    }

}

