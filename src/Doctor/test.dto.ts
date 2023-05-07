import { IsNotEmpty, IsInt} from "class-validator";

export class TestDTO {   
   
    
    @IsNotEmpty({ message: 'id is required' })
    @IsInt({ message: 'id must be ineger value' })
    id: number;
    
    @IsNotEmpty({ message: 'Name is required' })
    test_name: string;

    @IsNotEmpty({ message: 'expdate is required' })
    date: string;

    @IsNotEmpty({ message: 'report date is required' })
    delivery_date: string;

    @IsInt({ message: 'price must be ineger value' })
    fees: number;

    @IsNotEmpty({ message: 'refference_by is required' })
    refference_by: string;

    @IsInt({ message: 'patient_no must be ineger value' })
    patient_no: number;



}
