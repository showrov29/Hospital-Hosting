import { AmbulanceDTO } from './../DTOs/ambulance.dto';
import { Body, Controller ,Delete,FileTypeValidator,Get, HttpException, HttpStatus, MaxFileSizeValidator, Param, ParseArrayPipe, ParseBoolPipe, ParseEnumPipe, ParseFilePipe, ParseIntPipe, ParseUUIDPipe, Post, Put, Query, Request, Res, Session, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe} from "@nestjs/common";
import { AmbulanceService } from "../services/ambulance.service";
import { SessionGuardP } from '../session.guard';
import { ReportService } from '../services/report.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';




@Controller("/report")
export class ReportController {
    
    constructor(private readonly reportService: ReportService){}
   
    @Get("/show/:id")
    // @UseGuards(SessionGuard)
    getAmbulanceByPhone(@Param('id',ParseIntPipe) id:number): any{

        try{
            return this.reportService.getReportByPhone(id);

        }
        catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: err,
              }, HttpStatus.FORBIDDEN, {
                cause: err
              });
        }

       
    }
    @Get("/patient/:id")
    // @UseGuards(SessionGuard)
    getReportById(@Param('id',ParseIntPipe) id:number): any{

        try{
            return this.reportService.getReportById(id);

        }
        catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: err,
              }, HttpStatus.FORBIDDEN, {
                cause: err
              });
        }

       

    }


    @Put("/edit/:id")
    // @UseGuards(SessionGuardP)
    @UseInterceptors(FileInterceptor('report',{
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
    }),) file:Express.Multer.File ,@Param('id',ParseIntPipe) id:number , @Body( ) data:any ): any{
        
       
        data.report=file.filename;
        console.log(data);
        

        return this.reportService.editReport(id,data)
    }





    @Get('/getreport/:name')
    // @UseGuards(SessionGuardP)
    getImages(@Param('name') name, @Res() res) {
      res.sendFile(name,{ root: './uploads' })
    }




    @Post("/addreport")
    @UsePipes(new ValidationPipe())
     addUser(@Body() data:any): any{
        
        return this.reportService.addReport(data);
    }
  

}