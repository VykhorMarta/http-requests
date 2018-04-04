import { Employer } from "../app/employer.model";
import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import'rxjs/';


@Injectable()
export class ManageSevice {
    constructor(private http: Http){

    }

createHeaders(headers: Headers){
    headers.append('Accept', 'application/json') 
    headers.append('Access-Control-Allow-Origin', '*')
}

signUpNewUser(user: any) {
    return this.http.post("http://192.168.0.157:8080/user/register", user);
}

loginUser(credentials: any){
    return this.http.post("http://192.168.0.157:8080/user/login", credentials);

}

    private employers: Employer[] = [];

        getEmployers(): Employer[] {
            return this.employers;
        }
    
        addEployer(employer: Employer) {
            this.employers.push(employer);
        }

        deleteEmployer(employer:Employer) {
            let i = this.employers.indexOf(employer);
            if(i > -1) {
                this.employers.slice(i, 1);
            }
        }


}