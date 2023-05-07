import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Length, Matches } from "class-validator";


export class PatientDTO{
    
    

    
    @Length(4,20)
    @IsNotEmpty()
    @IsString({message:"Invalid Name"})
    firstName:string;

    @Length(4,20)
    @IsNotEmpty()
    @IsString({message:"Invalid Name"})
    lastName:string;

    @IsNotEmpty()
    dob: string;

    @IsOptional()
    @IsBoolean()
    status: boolean;

    @IsNotEmpty()
    @Length(11,14)
    // @Matches('','',{message:"Invalid Phone number"})
    phone: string;


    profilePic:string

    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    @IsNotEmpty()
    // @Matches('((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$','',{message:'Password must contain at least one character and one spacisl character'})
    password:string;
}