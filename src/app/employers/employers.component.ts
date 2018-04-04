import { Component, OnInit } from '@angular/core';
import { Employer } from '../employer.model';
import { ManageSevice } from '../../services/manage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit {
  user: Employer = new Employer('', '', '', '');
  loginUser: Employer = new Employer('', '', '', '');
  employers: Employer [] = [];
  constructor(private manageService: ManageSevice, private router: Router) { }

  ngOnInit() {
    this.employers = this.manageService.getEmployers();
  }

  goToManage() {
    this.router.navigate(['/manage'])
  }


signUp(){
  this.manageService.signUpNewUser(this.user).subscribe(
    res => {
      console.log(res);
    },
    err => {
      console.log('Some error')
    }
  )
}

  
Login(){
 let credentials = {
   email: this.loginUser.email,
   password: this.loginUser.password
 }
 this.manageService.loginUser(credentials).subscribe (
   res => {
     console.log(res)
     let token = res.json().token;
localStorage.setItem('token', token)  
 },
   err => {
    console.log('Some error')
  }
)
}

}
