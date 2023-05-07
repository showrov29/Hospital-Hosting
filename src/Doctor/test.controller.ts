import { TestDTO } from './test.dto';
import { Body, Controller ,Delete,Get, Param, ParseArrayPipe, ParseBoolPipe, ParseEnumPipe, ParseIntPipe, ParseUUIDPipe, Post, Put, Query, Request, UsePipes, ValidationPipe} from "@nestjs/common";
import { TestService } from "./test.service";


@Controller("/test")
export class TestController {
    
    constructor(private readonly testService: TestService){}

    @Get()
    getOperation(): any{
        return this.testService.getAllTest();
    }
    @Get("/:id")
    getTestById(@Param('id',ParseIntPipe) id:number): any{
        return this.testService.getTest(id);
    }
    @Put("/edit/:id")
    editTest(@Param('id',ParseIntPipe) id:number,@Body() data:TestDTO ): any{
        return this.testService.editTest(id,data) ;
    }
    @Post("/posttest")
    @UsePipes(new ValidationPipe())
    addTest(@Body() data:TestDTO): any{
        return this.testService.addTest(data);;
    }

}