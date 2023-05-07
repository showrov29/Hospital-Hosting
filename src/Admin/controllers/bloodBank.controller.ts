import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { BloodBankDto, updateBloodBankDto } from "../dto/bloodBank.dto";
import { BloodBankService } from "../services/bloodBank.service";
import { AdminGuard } from "../session.guard";

@Controller('bloodBank')
export class BloodBankController {
  constructor(private readonly bloodBankService: BloodBankService) {}

  @Get('/all')
  getBloodBank() {
    return this.bloodBankService.getBloodBank();
  }
  @Get('getBloodBank/:id')
  getBloodBankById(@Param('id', ParseIntPipe) id: string) {
    return this.bloodBankService.getBloodBankById(+id);
  }

  @Get('findBloodBank')
  getBloodBankByIdName(@Query() qry:any): any {
    return this.bloodBankService.getBloodBankByIdName(qry);
   }

  @Post('/insertBloodBank')
  @UseGuards(AdminGuard)
  insertBloodBank(@Body(new ValidationPipe()) mydto: BloodBankDto): any{
    return this.bloodBankService.insertBloodBank(mydto);
  }

  @Put('/updateBloodBank/:id')
  @UsePipes(new ValidationPipe())
  updateBloodBankById(
    @Body(new ValidationPipe()) mydto: BloodBankDto,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    return this.bloodBankService.updateBloodBankById(mydto, id);
  }
   @Patch('/updateBloodBankPat/:id')
   @UsePipes(new ValidationPipe())
  updateBloodBankPat(@Param('id') id: string, @Body(new ValidationPipe()) bloodBankDto: updateBloodBankDto) {
    return this.bloodBankService.updateBloodBankPat(bloodBankDto, id);
   }

  @Delete('/rmvBloodBank/:id')
  @UsePipes(new ValidationPipe())
  removeBloodBankById(@Param('id', ParseIntPipe) id: string):any {
    return this.bloodBankService.removeBloodBankById(+id);
  }

}