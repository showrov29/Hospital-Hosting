import { MedicineDTO } from './medicine.dto';
import { Body, Controller ,Delete,Get, Param, ParseArrayPipe, ParseBoolPipe, ParseEnumPipe, ParseIntPipe, ParseUUIDPipe, Post, Put, Query, Request, UsePipes, ValidationPipe} from "@nestjs/common";
import { MedicineService } from "./medicine.service";




@Controller("/medicine")
export class MedicineController {
    
    constructor(private readonly medicineService: MedicineService){}

    @Get()
    getMedicine(): any{
        return this.medicineService.getAllMedicine();
    }

    @Get("/:id")
    getMedicineById(@Param('id',ParseIntPipe) id:number): any{
        return this.medicineService.getMedicine(id);
    }
    @Put("/edit/:id")
    editMedicine(@Param('id',ParseIntPipe) id:number,@Body() data:MedicineDTO ): any{
        return this.medicineService.editMedicine(id,data) ;
    }
    @Post("/postmedicine")
    @UsePipes(new ValidationPipe())
    addMedicine(@Body() data:MedicineDTO): any{
        return this.medicineService.addMedicine(data);;
    }


}