import { IsNotEmpty, IsEmail, IsInt, Matches, MinLength, MaxLength } from "class-validator";

export class DoctorForm {   
   
    
   
    
    @MinLength(3, { message: 'name must be at least 3 characters long' })
    @MaxLength(30, { message: 'name cannot be longer than 30 characters' })
    @IsNotEmpty({ message: 'Name is required' })
    name: string;
   
    @IsEmail({}, { message: 'Invalid email format' })
    email: string;

    @IsNotEmpty({ message: 'Password is required' })
    /*@Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,64}$/gm, 
    {
        message:'Password must be between 6 to 64 characters long with 1 special character and 1 capital character',
    })  */  
      password: string;

    @IsInt({ message: 'Age must be ineger value' })
    age: number;

    @IsInt({ message: 'contact number must be ineger value' })
    contact: number;

    @IsNotEmpty({ message: 'specialist is required' })
    specialist: string;

    @IsNotEmpty()
    address: string;

    designation: string;

    profilePic:string

    nidPdf:string

    certificatePdf:string

    @IsNotEmpty({ message: 'bmdc_reg_no is required' })
    bmdc_reg_no: string;

    @IsNotEmpty({message: "Please enter your Id*"})
    admin:any;
    
}
