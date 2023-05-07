import { IsDate } from 'class-validator';
import { PatientDTO } from './../DTOs/patient.dto';
import { Body, Controller ,Delete,FileTypeValidator,Get, HttpException, HttpStatus, MaxFileSizeValidator, Param, ParseFilePipe, ParseIntPipe, Post, Put, Res, Session, UnauthorizedException, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe} from "@nestjs/common";
import { PatientService } from "../services/patient.service";
import { FileInterceptor } from '@nestjs/platform-express/multer';
import multer, { diskStorage } from 'multer';
import { SessionGuardP } from '../session.guard';




@Controller("/patient")
export class PatientController {

    constructor(private readonly patientService: PatientService){}
  
    @Get()
    getAllPatients(): any{
        return this.patientService.getAllPatients();
    }
    @Get("/profile/:id")
    // @UseGuards(SessionGuard)
    getPatientById(@Param('id',ParseIntPipe) id:number): any{

        // console.log(mysession.userId)
        // console.log(mysession.userEmail)

        return this.patientService.getPatientById(id);
    }
    @Post("/login/user")
     async login(@Session() mysession , @Body() data:PatientDTO){
        
      
        try{
            const user = await  this.patientService.login(data);
           
            mysession.userId=user.user.id;
            mysession.userEmail=user.user.email;
           console.log(mysession.userId);
           user.user.password=data.password;
           return user.user;
           
        }
        catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Login failed',
              }, HttpStatus.FORBIDDEN, {
                cause: err
              });
        }
        
         
          
           
           
     
    }
  

    @Delete("/delete/:id")
    deletePatient(@Param('id',ParseIntPipe) id:number): String{
        return this.patientService.deletePatient(id);
    }


  @Put("/edit/:id")
    // @UseGuards(SessionGuard)
    @UsePipes(new ValidationPipe())
    editPatientDetails(@Param('id',ParseIntPipe) id:number , @Body() data){
        return this.patientService.editPatientDetails(id,data) ;
    }

    @Put("/changepass/:id")
    // @UseGuards(SessionGuard)
    @UsePipes(new ValidationPipe())
    editPatientPass(@Param('id',ParseIntPipe) id:number , @Body() data){
        console.log(data);
        
        return this.patientService.editPatientPass(id,data) ;
    }
    @Post("/register")
    @UsePipes(new ValidationPipe())
     addUser(@Body() data:PatientDTO): any{
        
        return this.patientService.addUser(data);
    }


    @Put("/profile/upload/:id")
    // @UseGuards(SessionGuardP)
    @UseInterceptors(FileInterceptor('profilePic',{
        storage:diskStorage({
            destination:'./uploads/paitent/profile',
            filename: function(req,file,cb){
                cb(null,Date.now()+file.originalname);
            }
        })
    }))
    uploadProfile(@UploadedFile(new ParseFilePipe({
        validators: [
            new MaxFileSizeValidator({ maxSize: 1600000 }),
            new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
          ],
    }),) file:Express.Multer.File ,@Param('id',ParseIntPipe) id:number , @Body() data:PatientDTO ): any{
        
       
        data.profilePic=file.filename;

        return this.patientService.uploadProfilePic(id,data)
        
    }


    @Get('/logout')
    // @UseGuards(SessionGuardP)
    signout()
    {
    return {data:'Logget out'}
    }




    @Get('/getimage/:name')
    // @UseGuards(SessionGuardP)
    getImages(@Param('name') name, @Res() res) {
      res.sendFile(name,{ root: './uploads/paitent/profile' })
    }











}