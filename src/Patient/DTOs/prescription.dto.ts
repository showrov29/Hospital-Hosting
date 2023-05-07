import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Length, Matches } from "class-validator";


export class PrescriptionDTO{

    @IsOptional()
    test:string

    @IsOptional()
    medicine:string

    @IsNotEmpty()
    @IsInt()
    patientAge:number

    @IsNotEmpty()
    @IsString()
    patientName:string
    
    @IsNotEmpty()
    @IsString()
    doctorName:string
  
    pdf:string

    @IsNotEmpty()
    @IsInt()
    patientId:number

    // @IsNotEmpty()
    // patient:any




    
}