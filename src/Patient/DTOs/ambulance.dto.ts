import { PatientEntity } from './../Entities/patient.entity';
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, length, Length, Matches } from "class-validator";
import { OneToMany } from "typeorm";

export class AmbulanceDTO{

    
    @IsNotEmpty()
    @Length(4,20)
    @IsString({message:"Invalid Name"})
    driverName:string

    // @IsNotEmpty({message:"hospital id can nt be empty"})
    // @IsInt()
    // hospitalId:number

    @IsNotEmpty()
    @IsInt()
    rent:number
    

    @IsNotEmpty()
    @IsString()
    @Length(11,11)
    // @Matches('^01[3-9]\d{9}$','',{message:'Enter a valid phone'})
    phone:string


    @IsOptional()
    // @IsBoolean({})
    status:boolean

    
    @IsOptional()
    // @IsInt()
    patientId:number


    @IsNotEmpty()
    @IsString()
    @Matches('^[#.0-9a-zA-Z\s,-]+$')
    location:string

    patientA:any
   



}