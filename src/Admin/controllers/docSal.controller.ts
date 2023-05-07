import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { DocSalDto, UpdateDocSalDto } from "../dto/docSal.dto";
import { DocSalService } from "../services/docSal.service";

@Controller('docSal')
export class DocSalController {
  constructor(private readonly docSalService: DocSalService) {}

  @Get('all')
  getDocSal() {
    return this.docSalService.getDocSal();
  }

  @Get('findDocSal/:id')
  getDocSalById(@Param('id', ParseIntPipe) id: string) {
    return this.docSalService.getDocSalById(+id);
  }

  @Get('findDocSal')
  getDocSalByIdName(@Query() qry:any): any {
    return this.docSalService.getDocSalByIdName(qry);
   }

  @Post('/insertDocSal')
  @UsePipes(new ValidationPipe())
  insertDocSal(@Body(new ValidationPipe()) mydto: DocSalDto): any{
    return this.docSalService.insertDocSal(mydto);
  }

  @Put('/updateDocSal/:id')
  @UsePipes(new ValidationPipe())
  //@UsePipes(new ValidationPipe())
  updateDocSalById(
    @Body(new ValidationPipe()) mydto: DocSalDto,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    return this.docSalService.updateDocSalById(mydto, id);
  }
   @Patch('/updateDocSalPat/:id')
   @UsePipes(new ValidationPipe())
  // @UsePipes(new ValidationPipe())
  updateDocPat(@Param('id') id: string, @Body(new ValidationPipe()) docSalDto: UpdateDocSalDto) {
    return this.docSalService.updateDocPat(docSalDto, id);
   }

  @Delete('/rmvDocSal/:id')
  @UsePipes(new ValidationPipe())
  removeDocSalById(@Param('id', ParseIntPipe) id: string):any {
    return this.docSalService.removeDocSalById(+id);
  }
}