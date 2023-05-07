import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateAdminDto, UpdateAdminDto } from "../dto/admin.dto";
import { AdminEntity } from "../entity/admin.entity";
import * as bcrypt from 'bcrypt';
//import { MailerService } from "@nestjs-modules/mailer";
import { MailerService } from "@nestjs-modules/mailer";
@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(AdminEntity)
        private adminRepo: Repository<AdminEntity>,
        private mailerService: MailerService
      ) {}
    
    getAdmin() {
        return this.adminRepo.find();
    }
    getAdminById(id):any {
        return this.adminRepo.findOneBy({ id });
    }

    changePass(password,email):any {
   
        return this.adminRepo.update({email:email},{password:password});
    }

    getAdminByIdName(qry):any {
        return this.adminRepo.findOneBy({ id:qry.id, name:qry.name});
   }
    insertAdmin(mydto: CreateAdminDto): any{
    const adminAccount = new AdminEntity()
    adminAccount.name = mydto.name;
    adminAccount.age = mydto.age;
    adminAccount.password = mydto.password;
    adminAccount.gender = mydto.gender;
    adminAccount.address = mydto.address;
    adminAccount.email = mydto.email;
    adminAccount.contactNo = mydto.contactNo;
    return this.adminRepo.save(adminAccount);
    }

    updateAdminById(myData:CreateAdminDto, id): any{
        return this.adminRepo.update(id, {name:myData.name, age:myData.age, password:myData.password, gender:myData.gender, address:myData.address, email:myData.email,contactNo:myData.contactNo});
    }
    updateAdminPat(myData:UpdateAdminDto, id): any{
        return this.adminRepo.update(id,myData);
    }
    
    removeAdminById(id): any{
        //return "Staff removed by Id : "+id;
        
        return this.adminRepo.delete(id);
    }

    async addUser(data): Promise<any> {
        console.log("data", data)
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword
        return this.adminRepo.save(data);
    }

    async signup(mydto:CreateAdminDto, filename: string) {
        const salt = await bcrypt.genSalt();
        const hassedpassed = await bcrypt.hash(mydto.password, salt);
        mydto.password= hassedpassed;

        const adminAccount = new AdminEntity()
        adminAccount.name = mydto.name;
        adminAccount.age = mydto.age;
        adminAccount.password = mydto.password;
        adminAccount.gender = mydto.gender;
        adminAccount.address = mydto.address;
        adminAccount.email = mydto.email;
        adminAccount.contactNo = mydto.contactNo;
        adminAccount.filename = filename;
        console.log("service", adminAccount);
        return this.adminRepo.save(adminAccount);
    }
        async signin(mydto){
            console.log(mydto.password);
        const mydata= await this.adminRepo.findOneBy({email: mydto.email});
        const isMatch= await bcrypt.compare(mydto.password, mydata.password);
        if(isMatch) {
        return 1;
        }
        else {
            return 0;
        }
        
        }

    getHospitalsByAdminId(id):any {
        // return this.adminRepo.find({ 
        //         where: {id:id},
        //     relations: {
        //         hospitals: true,
        //     },
        //  });
    }

    getDoctorsByAdminId(id):any {
        // return this.adminRepo.find({ 
        //         where: {id:id},
        //     relations: {
        //         hospitals: true,
        //     },
        //  });
    }

    async sendEmail(mydata){
        return   await this.mailerService.sendMail({
               to: mydata.email,
               subject: mydata.subject,
               text: mydata.text, 
             });
       
       }
    
}