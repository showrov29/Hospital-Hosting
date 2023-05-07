import { Injectable } from "@nestjs/common";
import { IsBoolean, IsDate, IsDateString, IsInt, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";

@Injectable()
export class AppointmentDTO{

    @IsNotEmpty()
    @IsString()
    date : string;

    @IsNotEmpty()
    @IsInt()
    age:number

    @IsNotEmpty()
    @IsInt()
    DoctorId:number

    @IsNotEmpty()
    @IsInt()
    patientId:number

    @IsNotEmpty()
    @IsString()
    @Length(4,20)
    name :string

    @IsOptional()
    @IsBoolean()
    status:boolean


    @IsInt()
    prescriptionId:number
}