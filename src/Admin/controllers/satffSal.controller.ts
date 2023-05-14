import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, UsePipes, ValidationPipe } from "@nestjs/common";
// import { StaffSalDto, UpdateStaffSalDto } from "../dto/StaffSal.dto";
import { StaffSalService } from "../services/StaffSal.service";

@Controller('staffSal')
export class StaffSalController {
  constructor(private readonly staffSalService: StaffSalService) {}

  @Get('all')
  getStaffSal() {
    return this.staffSalService.getStaffSal();
  }
  @Get('findStaffSal/:id')
  getStaffSalById(@Param('id', ParseIntPipe) id: string) {
    return this.staffSalService.getStaffSalById(+id);
  }

  @Get('findStaffSal')
  getStaffSalByIdName(@Query() qry:any): any {
    return this.staffSalService.getStaffSalByIdName(qry);
   }

  @Post('/insertStaffSal')
  @UsePipes(new ValidationPipe())
  insertStaffSal(@Body(new ValidationPipe()) mydto: any): any{
    return this.staffSalService.insertStaffSal(mydto);
  }

  @Put('/updateStaffSal/:id')
  @UsePipes(new ValidationPipe())
  //@UsePipes(new ValidationPipe())
  updateStaffSalById(
    @Body(new ValidationPipe()) mydto: any,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    return this.staffSalService.updateStaffSalById(mydto, id);
  }
   @Patch('/updateStaffSalPat/:id')
   @UsePipes(new ValidationPipe())
  // @UsePipes(new ValidationPipe())
  updateStaffPat(@Param('id') id: string, @Body(new ValidationPipe()) StaffSalDto: any) {
    return this.staffSalService.updateStaffPat(StaffSalDto, id);
   }

  @Delete('/rmvStaffSal/:id')
  @UsePipes(new ValidationPipe())
  removeStaffSalById(@Param('id', ParseIntPipe) id: string):any {
    return this.staffSalService.removeStaffSalById(+id);
  }
}