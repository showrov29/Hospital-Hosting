import { AmbulanceDTO } from './../DTOs/ambulance.dto';
import { AmbulanceService } from "../services/ambulance.service";
export declare class AmbulanceController {
    private readonly ambulanceService;
    constructor(ambulanceService: AmbulanceService);
    getAmbulanceById(id: number): any;
    getAmbulanceByStatus(): any;
    getAmbulanceByProfile(id: number): any;
    getAmbulances(): any;
    deleteAmbulance(id: number): any;
    editAmbulance(id: number, data: AmbulanceDTO): any;
    addAmbulance(data: AmbulanceDTO): any;
    getImages(name: any, res: any): void;
}
