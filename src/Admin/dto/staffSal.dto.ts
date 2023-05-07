import { IsEmail, IsNotEmpty, IsOptional, IsString, Length, Matches } from "class-validator";

export class StaffSalDto{

    @IsNotEmpty({message:"Please enter your name *"})
    @IsString({message: "Invalid. salary field is string *"})
    salary: string;
    @IsNotEmpty({message:"Please enter the date *"})
    @Matches(/^\d{2}\/\d{2}\/\d{4}$/,
         {message: "Invalid date format.. mm/dd/yyyy"})
    dateOfPayment: string;
    @IsNotEmpty({message: "Enter the month*"})
    @IsString({message: "Invalid. Month field is string *"})
    month:string;

    @IsNotEmpty({message: "what's the status*"})
    @IsString({message: "Invalid. Status field is string *"})
    status:string;
}

export class UpdateStaffSalDto{

    id: number;
    @IsOptional()
    @IsNotEmpty({message:"please enter salary *"})
    @IsString({message: "Invalid. salary field is string *"})
    salary: string;
    @IsOptional()
    @IsNotEmpty({message:"Please enter the date *"})
    @Matches(/^\d{2}\/\d{2}\/\d{4}$/,
         {message: "Invalid date format.. mm/dd/yyyy"})
    dateOfPayment: string;
    @IsOptional()
    @IsNotEmpty({message: "Enter the month*"})
    @IsString({message: "Invalid. Month field is string *"})
    month:string;

    @IsOptional()
    @IsNotEmpty({message: "what's the status*"})
    @IsString({message: "Invalid. Status field is string *"})
    status:string;
}

