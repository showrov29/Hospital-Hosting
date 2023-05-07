import { IsNotEmpty, IsInt} from "class-validator";

export class OperationDTO {   
   
    
    @IsNotEmpty({ message: 'id is required' })
    @IsInt({ message: 'id must be ineger value' })
    ot_id: number;
    
    @IsNotEmpty({ message: 'room number is required' })
    room_number: string;

    @IsNotEmpty({ message: 'id is required' })
    ot_date: string;

    @IsNotEmpty({ message: 'id is required' })
    ot_time: string;



}
