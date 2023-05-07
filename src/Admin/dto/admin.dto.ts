
import { UploadedFile } from "@nestjs/common";
import { IsEmail, IsIn, IsInt, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, Length, Matches, MaxLength, Min, MinLength, ValidateNested } from "class-validator";


export class CreateAdminDto {
    @IsNotEmpty({message:"Please enter your name *"})
    @IsString({message: "Invalid name. Name should be a string *"})
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/,
     {message: "Username must be minimum 4 characters, at least one letter and one number"})
    name: string;

    @IsOptional()
    @IsInt({message: "Invalid age"})
    @Min(20, {message:"Sorry you are underage. You have to be at least 20 years old"})
    age: number;

    @IsNotEmpty({message: "Please enter your password*"}) 
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
     {message: "Password minimum 6 characters, at least one letter, one number and one special character"})
    password: string;

    @IsNotEmpty({message: "your gender*"})
    @Matches(/^(?:male|female|other)$/ig, {
        message: " Invalid. Male / Female / other?"})
    gender:string;

    @IsOptional()
    @IsNotEmpty({message:"Please enter your address *"})
    @IsString({message: "Invalid address. Address should be a string *"})
    address: string;

    @IsNotEmpty({message: "Please enter your email address*"})
    @IsEmail()
    email: string;

    @IsNotEmpty({message:"Please enter your contact Number *"})
    //@Length(11,11, {message:"Invalid Phone number*"})
    @Matches(/^(?:\+88|88)?(01[3-9]\d{8})$/,
     {message: "Invalid contact Number. Only bangladeshi operator accepted"})
    contactNo:string;

}

export class UpdateAdminDto {
    
       // @IsOptional()
        id: number;

        @IsOptional()
        @IsNotEmpty({message:"Please enter your name *"})
        @IsString({message: "Invalid name. Name should be a string *"})
        @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/,
         {message: "Username must be minimum 4 characters, at least one letter and one number"})
        name: string;
    
        @IsOptional()
        @IsInt({message: "Invalid age"})
        @Min(20, {message:"Sorry you are underage. You have to be at least 20 years old"})
        age: number;

        @IsOptional()
        @IsNotEmpty({message: "Please enter your password*"})
        @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
         {message: "Password minimum eight characters, at least one letter, one number and one special character"})
        password: string;

        @IsOptional()
        @IsNotEmpty({message: "your gender?"})
        gender:string;
    
        @IsOptional()
        @IsNotEmpty({message:"Please enter your address *"})
        @IsString({message: "Invalid address. Address should be a string *"})
        address: string;
    
        @IsOptional()
        @IsNotEmpty({message: "Please enter your email address*"})
        @IsEmail()
        email: string;
    
        @IsOptional()
        @IsNotEmpty({message:"Please enter your contact Number *"})
        //@Length(11,11, {message:"Invalid Phone number*"})
        @Matches(/^(?:\+88|88)?(01[3-9]\d{8})$/,
         {message: "Invalid contact Number. Only bangladeshi operator accepted"})
        contactNo:string;

        //@IsOptional()
        filename:string;
    
    }
    