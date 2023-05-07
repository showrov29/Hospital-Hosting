import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe,Session, 
  UploadedFile, UseInterceptors, FileTypeValidator,MaxFileSizeValidator, ParseFilePipe, UnauthorizedException, UseGuards, Res} from '@nestjs/common';
import { DoctorForm } from './doctor.dto';
import { DoctorService } from './doctor.service';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import multer, { diskStorage } from 'multer';
import { SessionGuard } from './session.guard';



@Controller("/doctor")
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  
  @Get("/alldoc")
  getAllDoctors(): String{
      return this.doctorService.getAllDoctors();
  }

  @Get("/:id")
      getDoctorById(@Param("id", ParseIntPipe) id:number): number{
          return this.doctorService.getDoctorById(id);
      }

      @Delete('/delete/:id')
      deleteDoctor(@Param('id', ParseIntPipe) id: number): any {
        return this.doctorService.deleteDoctor(id);
      }

  @Put("/edit/:id")
      editDoctor(@Query() qar): String{
          return this.doctorService.editDoctor(qar) ;
      }


      @Get("/login/doc")
      async login(@Session() mysession , @Body() data:DoctorForm){
         
       
            const doc = await  this.doctorService.login(data);
            
            mysession.docId=doc.doc.id;
            mysession.docEmail=doc.doc.email;
           console.log(mysession.docEmail);
           
           return doc
            
            
      
     }



    @Post('/register')
      @UsePipes(new ValidationPipe())
      registerid(@Body() mydto: DoctorForm): any {
          return this.doctorService.register(mydto);
        }

  @Delete("/remove/:name")
      remove(@Param("name") name:string): string{
      return this.doctorService.remove(name);
  }

    @Put("/update/")
    @UsePipes(new ValidationPipe())
    updatedoc( 
      @Body("id")  id:number,  
      @Body("name") name:string,
      @Body("email")  email:string, 
      @Body("password")  password:string,
      @Body("age")  age:number,

  
      ): any {
    return this.doctorService.updatedoc(id,name,email,password,age)
    }
    
    @Put("/update/:id")
  updateDoctorbyid( 
      @Body("name") name:string, 
      @Body("email") email:string, 
      @Body("password") password:number, 
      @Body("age")  age:number,
      
      @Param("id", ParseIntPipe) id:number
      ): any {
    return this.doctorService.updateDoctorbyid(id,name,email,password,age)
    }



  @Get("/Patient/:id")
      getPatientById(@Query() qry:any): any {
      return this.doctorService.getPatientById(qry);
  }

  @Get("/hospital/:name")
      getHospital(@Param("name") name:string): string{
      return this.doctorService.getHospital(name);
  }

  @Put("/prescription")
      pres(@Body("medicine") medicine:string,
              @Param("id") id:number): any{
      return this.doctorService.pres(medicine, id);
  }

  @Put("/test")
  test(@Body("test") test:string,
              @Param("id") id:number): any{
      return this.doctorService.test(test, id);
  }

  



  @Put("/profile/upload")
  @UseGuards(SessionGuard)
  @UseInterceptors(FileInterceptor('profilePic',{
      storage:diskStorage({
          destination:'./uploads/doctor/profile',
          filename: function(req,file,cb){
              cb(null,Date.now()+file.originalname);
          }
      })
  }))
  uploadProfile(@UploadedFile(new ParseFilePipe({
      validators: [
          new MaxFileSizeValidator({ maxSize: 160000000000 }),
          new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
        ],
  }),) file:Express.Multer.File ,@Session() mysession, @Body() data:DoctorForm ): any{
      
      console.log(file.originalname+mysession.docId);
      data.profilePic=file.filename;

      return this.doctorService.uploadProfilePic(mysession.docId,data)
      
  }

  @Get('/logout')
  @UseGuards(SessionGuard)
  signout(@Session() mysession)
  {
  if(mysession.destroy())
  {
      return {message:"Logged Out"};
  }
  else
  {
      throw new UnauthorizedException("Something Wrong");
  }
  }



  @Put("/nid/upload")
  @UseGuards(SessionGuard)
  @UseInterceptors(FileInterceptor('nidPdf',{
      storage:diskStorage({
          destination:'./uploads/doctor/nid',
          filename: function(req,file,cb){
              cb(null,Date.now()+file.originalname);
          }
      })
  }))
  uploadNidPdf(@UploadedFile(new ParseFilePipe({
      validators: [
          new MaxFileSizeValidator({ maxSize: 1600000 }),
          new FileTypeValidator({ fileType: 'pdf' }),
        ],
  }),) file:Express.Multer.File ,@Session() mysession, @Body() data:DoctorForm ): any{
      
      console.log(file.originalname+mysession.docId);
      data.nidPdf=file.filename;

      return this.doctorService.uploadNidPdf(mysession.docId,data)
      
  }


  @Put("/certificate/upload")
  @UseGuards(SessionGuard)
  @UseInterceptors(FileInterceptor('nidPdf',{
      storage:diskStorage({
          destination:'./uploads/doctor/nid',
          filename: function(req,file,cb){
              cb(null,Date.now()+file.originalname);
          }
      })
  }))
  uploadCertificatePdf(@UploadedFile(new ParseFilePipe({
      validators: [
          new MaxFileSizeValidator({ maxSize: 1600000 }),
          new FileTypeValidator({ fileType: 'pdf' }),
        ],
  }),) file:Express.Multer.File ,@Session() mysession, @Body() data:DoctorForm ): any{
      
      console.log(file.originalname+mysession.docId);
      data.certificatePdf=file.filename;

      return this.doctorService.uploadCertificatePdf(mysession.docId,data)
      
  }


  @Get('/getimage/:name')
    // @UseGuards(SessionGuardP)
    getImages(@Param('name') name, @Res() res) {
      res.sendFile(name,{ root: './uploads/doctor/profile' })
    }



}
