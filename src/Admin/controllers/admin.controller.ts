import { Body, Controller, Delete, FileTypeValidator, Get, Header, MaxFileSizeValidator, 
  Param, ParseFilePipe, ParseIntPipe, Patch, Post, Put, Query, UploadedFile, UseInterceptors, Session,
  UsePipes, ValidationPipe, UseGuards, UnauthorizedException} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { CreateAdminDto, UpdateAdminDto } from "../dto/admin.dto";
import { AdminService } from "../services/admin.service";
import { HospitalService } from "../services/hospital.service";
import { AdminGuard } from "../session.guard";

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService,
    private hospitalService: HospitalService) {}

  @Get('/all')
  getAdmin() {
    return this.adminService.getAdmin();
  }
  @Get('/getAdmin/:id')
  getAdminById(@Param('id', ParseIntPipe) id: string) {
    return this.adminService.getAdminById(+id);
  }

  @Get('findAdmin')
  getAdminByIdName(@Query() qry:any): any {
    return this.adminService.getAdminByIdName(qry);
   }

   @Put('/changePass/')
  @UseGuards(AdminGuard)
  @UsePipes(new ValidationPipe())
  changePass(@Session() session,@Body('password') password: string): any {
    console.log(session.email);
    return this.adminService.changePass(password, session.email);
  }

  @Post('/insertAdmin')
  @UseGuards(AdminGuard)

  insertAdmin(@Body(new ValidationPipe()) mydto: CreateAdminDto): any{
    return this.adminService.insertAdmin(mydto);
  }

  @Get('/signin')
  signin(@Session() session, @Body() mydto:CreateAdminDto)
  {
    if(this.adminService.signin(mydto))
    {
      session.email = mydto.email;

      console.log(session.email);
      return {message:"success"};

    }
    else
    {
      return {message:"invalid credentials"};
    }
  }


  @Put('/updateAdmin/:id')
  @UseGuards(AdminGuard)
  //@UsePipes(new ValidationPipe())
  updateAdminById(
    @Body(new ValidationPipe()) mydto: UpdateAdminDto,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    return this.adminService.updateAdminById(mydto, id);
  }

   @Patch('/updateAdminPat/:id')
   @UseGuards(AdminGuard)
  // @UsePipes(new ValidationPipe())
  updateAdminPat(@Param('id') id: number, @Body(new ValidationPipe()) updateAdminDto: UpdateAdminDto):any {
    return this.adminService.updateAdminPat(updateAdminDto, id);
   }
  
  
  @Delete('/rmvAdmin/:id')
  @UseGuards(AdminGuard)
  removeAdminById(@Param('id', ParseIntPipe) id: string):any {
    return this.adminService.removeAdminById(+id);
  }

  @Get('findAdminByHospital/:id')
  getAdminByHospitalId(@Param('id', ParseIntPipe) id: number): any {
      return this.hospitalService.getAdminByHospitalId(id);
    }
  @Get('/findHospitalsByAdmin/:id')
  getHospitalsByAdminId(@Param('id', ParseIntPipe) id: number): any {
    return this.adminService.getHospitalsByAdminId(id);
  }

  @Get('/findDoctorsByAdmin/:id')
  getDoctorsByAdminId(@Param('id', ParseIntPipe) id: number): any {
    return this.adminService.getDoctorsByAdminId(id);
  }

  @Post("signup")
  @UseInterceptors(FileInterceptor('file',
  {storage:diskStorage({
      destination: './uploads',
      filename: function (req, file, cb) {
        cb(null,Date.now()+file.originalname)
      }
    })
  }))
  signup(@Body() body: CreateAdminDto, @UploadedFile( new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 16000000000 }),
        new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
      ],
    }),) file: Express.Multer.File) : any{
    return this.adminService.signup(body, file.filename);
  } 
  
  @Post('/sendemail')
  @UseGuards(AdminGuard)
  sendEmail(@Body() mydata){
  return this.adminService.sendEmail(mydata);
  }
  @Get('/signout')
  signout(@Session() session)
  {
    if(session.destroy())
    {
      return {message:"you are logged out"};
    }
    else
    {
      throw new UnauthorizedException("invalid actions");
    }
  }


  // @Post('signup')
  // @UseInterceptors(FileInterceptor('profile',
  // {storage:diskStorage({
  //   destination: './uploads',
  //   filename: function (req, file, cb) {
  //     cb(null,Date.now()+file.originalname)
  //   }
  // })

  // }))
  // signup(@Body(new ValidationPipe()) mydto: CreateAdminDto, @UploadedFile(  new ParseFilePipe({
  //   validators: [
  //     new MaxFileSizeValidator({ maxSize: 16000000000 }),
  //     new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
  //   ],
  // }),) file: Express.Multer.File){

  // mydto.filename = file.filename;  

  // return this.adminService.signup(mydto);
  // console.log(file)
  // }
  
}
