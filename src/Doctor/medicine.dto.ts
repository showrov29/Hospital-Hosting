import { IsNotEmpty, IsInt} from "class-validator";

export class MedicineDTO {   
   
    
    @IsNotEmpty({ message: 'id is required' })
    @IsInt({ message: 'id must be ineger value' })
    id: number;
    
    @IsNotEmpty({ message: 'Name is required' })
    medname: string;

    @IsNotEmpty({ message: 'expdate is required' })
    expdate: string;

    @IsInt({ message: 'price must be ineger value' })
    price: number;



}
