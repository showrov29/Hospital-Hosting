import { AmbulanceDTO } from './../DTOs/ambulance.dto';
import { Repository } from 'typeorm';
import { AmbulanceEntity } from '../Entities/ambulance.entity';
export declare class AmbulanceService {
    private ambulanceReppo;
    constructor(ambulanceReppo: Repository<AmbulanceEntity>);
    getAllAmbulance(): any;
    getAmbulance(id: any): any;
    getAmbulanceByProfile(id: any): any;
    deleteAmbulance(id: any): any;
    editAmbulance(id: any, data: any): any;
    addAmbulance(ambulance: AmbulanceDTO): any;
    getAmbulanceByStatus(na: any): any;
}
