import { AppointmentDTO } from './../DTOs/appointment.dto';
import { AppoinmentService } from './../services/appointment.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Session, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { SessionGuardP } from '../session.guard';
import { log } from 'console';


@Controller('appointment')
export class AppointmentController{

    constructor(private readonly appointmentService: AppoinmentService){}
  
    @Get()
    @UseGuards(SessionGuardP)
    getAppointments():any{
        return this.appointmentService.getAllAppointments();
    }
    @Get('/show/:id')
    // @UseGuards(SessionGuard)
    getAppointmentById(@Param() id):any{
        return this.appointmentService.getAppointmentById(id);
    }
    @Get('/myappointments/:id')
    // @UseGuards(SessionGuard)
    getAppointmentByProfile(@Param('id',ParseIntPipe) id:number ):any{
    
        console.log(id);
        
        return this.appointmentService.getAppointmentByProfile(id)

    }

    @Put('/update/:id')
    @UseGuards(SessionGuardP)
    updateAppointment(@Param('id',ParseIntPipe) id:number,@Body() data ):any{
        return this.appointmentService.editAppointment(id,data)
    }

    @Delete('/delete/:id')
    // @UseGuards(SessionGuardP)
    deleteAppointment(@Param('id',ParseIntPipe) id:number  ):any {
        return this.appointmentService.deleteAppointment(id);
    }

    @Post('/add')
    // @UseGuards(SessionGuard)
    @UsePipes(new ValidationPipe())
    makeAppointment(@Body() appointmentData:AppointmentDTO,@Session() mysession ):any {

            
            return this.appointmentService.addAppointment(appointmentData,mysession);
    }


    
}