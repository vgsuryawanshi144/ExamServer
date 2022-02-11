import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
// import { Observable} from 'rxjs';
import Swal from 'sweetalert2/dist/sweetalert2.js';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor( private userService:UserService, private _snackBar: MatSnackBar,) { }

  public user={
    firstName:'',
    lastName:'',
    email:'',
    userName:'',
    password:'',
    moNumber:'',
  }

  ngOnInit(): void {
  }

  formSubmit()
{
    console.log(this.user);
    // alert('Form submitted Successfully');
    if(this.user.userName ==null || this.user.userName =='')
    {
      this._snackBar.open('User filed are required', '' ,{
        duration: 2000,
        //verticalPosition: 'top',
      });
  return;
}

   this.userService.addUser(this.user).subscribe(
     (data: any)=>{
       //success
       console.log(data)
    //    alert('success');
    // this._snackBar.open('User registerd successfully', '' ,{
    //   duration: 2000,
    //   //verticalPosition: 'top',
    // })  
    Swal.fire('successfully done', 'User is registred'+data.id, )
  });
    
     (error)=>{
       console.log(error)
      // alert('Somthing went wrong');
       //error
       this._snackBar.open('Something went wrong', '' ,{
        duration: 2000,
     });
    }
   
  }
}
