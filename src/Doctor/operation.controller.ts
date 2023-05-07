import { OperationDTO } from './operation.dto';
import { Body, Controller ,Delete,Get, Param, ParseArrayPipe, ParseBoolPipe, ParseEnumPipe, ParseIntPipe, ParseUUIDPipe, Post, Put, Query, Request, UsePipes, ValidationPipe} from "@nestjs/common";
import { OperationService } from "./operation.service";


@Controller("/operation")
export class OperationController {
    
    constructor(private readonly operationService: OperationService){}

    @Get()
    getOperation(): any{
        return this.operationService.getAllOperation();
    }
    @Get("/:id")
    getOperationById(@Param('id',ParseIntPipe) id:number): any{
        return this.operationService.getOperation(id);
    }
    @Put("/edit/:id")
    editOperation(@Param('id',ParseIntPipe) id:number,@Body() data:OperationDTO ): any{
        return this.operationService.editOperation(id,data) ;
    }
    @Post("/postoperation")
    @UsePipes(new ValidationPipe())
    addOperation(@Body() data:OperationDTO): any{
        return this.operationService.addOperation(data);;
    }

}