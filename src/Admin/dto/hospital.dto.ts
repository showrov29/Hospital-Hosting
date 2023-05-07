import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsObject, IsOptional, IsString, Length } from "class-validator";

export class HospitalDto{
    @IsNotEmpty({message:"Please enter your name *"})
    @IsString({message: "Invalid name. Name should be a string *"})
    name: string;
   
    @IsNotEmpty({message:"Please enter your name *"})
    @IsString({message: "Invalid. Address should be a string *"})
    address: string;
    @IsNotEmpty({message:"Please enter the helpline Number *"})
    @Length(3,3, {message:"Invalid helpline number*"})
    helpline: string;
    @IsNotEmpty({message: "Please enter your email address*"})
    @IsEmail()
    email:string;

    @IsNotEmpty({message: "Please enter the available ambulance*"})
    ambulanceNumber:number;

    //@IsOptional()
    @IsNotEmpty({message: "Please enter your Id*"})
    admin:any;

    //@IsOptional()
    @IsNotEmpty({message: "Please enter bloodBank ID*"})
    bloodBank:any;
}

export class updateHospitalDto{
    @IsOptional()
    id: number;

    @IsOptional()
    @IsNotEmpty({message:"Please enter your name *"})
    @IsString({message: "Invalid name. Name should be a string *"})
    name: string;

    @IsOptional()
    @IsNotEmpty({message:"Please enter your name *"})
    @IsString({message: "Invalid. Address should be a string *"})
    address: string;

    @IsOptional()
    @IsNotEmpty({message:"Please enter the helpline Number *"})
    @Length(3,3, {message:"Invalid helpline number*"})
    helpline: string;

    @IsOptional()
    @IsNotEmpty({message: "Please enter your email address*"})
    @IsEmail()
    email:string;

    @IsOptional()
    @IsNotEmpty({message: "Please enter the available ambulance*"})
    ambulanceNumber:number;

    @IsOptional()
    @IsNotEmpty({message: "Please enter your Id*"})
    admin:any;

    @IsOptional()
    @IsNotEmpty({message: "Please enter bloodBank ID*"})
    bloodBank:any;

}