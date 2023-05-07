import { AmbulanceDTO } from './../DTOs/ambulance.dto';
import { Body, Controller ,Delete,Get, HttpException, HttpStatus, Param, ParseArrayPipe, ParseBoolPipe, ParseEnumPipe, ParseIntPipe, ParseUUIDPipe, Post, Put, Query, Request, Res, Session, UseGuards, UsePipes, ValidationPipe} from "@nestjs/common";
import { AmbulanceService } from "../services/ambulance.service";
import { SessionGuardP } from '../session.guard';




@Controller("/ambulance")
export class AmbulanceController {
    
    constructor(private readonly ambulanceService: AmbulanceService){}
    @Get("show/:id")
    // @UseGuards(SessionGuard)
    getAmbulanceById(@Param('id',ParseIntPipe) id:number): any{

        try{
            return this.ambulanceService.getAmbulance(id);

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
    @Get("/available")
    // @UseGuards(SessionGuard)
    getAmbulanceByStatus(): any{
        try{
            
            return this.ambulanceService.getAmbulanceByStatus(true);
        }
        catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'something went wrong',
              }, HttpStatus.FORBIDDEN, {
                cause: err
              });
        }
    }
    @Get("/booked/profile/:id")
    // @UseGuards(SessionGuard)
    getAmbulanceByProfile(@Param('id',ParseIntPipe) id:number): any{
        try{
            
           
            console.log(id);
            
            const x= this.ambulanceService.getAmbulanceByProfile(id);
            return x;
        }
        catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'something went wrong',
              }, HttpStatus.FORBIDDEN, {
                cause: err
              });
        }
    }

    @Get()
    // @UseGuards(SessionGuard)

    getAmbulances(): any{
        try{
            return this.ambulanceService.getAllAmbulance();
           
        }
        catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'something went wrong',
              }, HttpStatus.FORBIDDEN, {
                cause: err
              });
        }
    }
  
    @Delete("/delete/:id")
    @UseGuards(SessionGuardP)
    deleteAmbulance(@Param('id',ParseIntPipe) id:number ): any{
        try{
            return this.ambulanceService.deleteAmbulance(id);
            
        }
        catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'something went wrong',
              }, HttpStatus.FORBIDDEN, {
                cause: err
              });
        }

    }
    @Put("/edit/:id")
    // @UseGuards(SessionGuardP)
    editAmbulance(@Param('id',ParseIntPipe) id:number,@Body() data:AmbulanceDTO ): any{
        
        try{
            return this.ambulanceService.editAmbulance(id,{patientId:data.patientId,status:data.status}) ;
        }
        catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'something went wrong',
              }, HttpStatus.FORBIDDEN, {
                cause: err
              });
        }

    }
    @Post("/register")
    @UseGuards(SessionGuardP)
    @UsePipes(new ValidationPipe())
    addAmbulance(@Body() data:AmbulanceDTO): any{
        try{
            return this.ambulanceService.addAmbulance(data);
        }
        catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'something went wrong',
              }, HttpStatus.FORBIDDEN, {
                cause: err
              });
        }
    }



    @Get('/getimage/:name')
    // @UseGuards(SessionGuardP)
    getImages(@Param('name') name, @Res() res) {
      res.sendFile(name,{ root: './uploads/Ambulance' })
    }




}