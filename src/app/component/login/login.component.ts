import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  loginError:Boolean = false;
  editar: boolean =false;
  logueado:boolean = false;

  constructor(private formBuilder:FormBuilder, private loginService:LoginService) {
    this.form=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      contrasena:['',[Validators.required,Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
    this.logueado = this.loginService.logueado();
  }

  login(event:Event){
    event.preventDefault;
    this.loginService.login(this.form.value).subscribe((response:Boolean)=>{
      if(response) window.location.reload();
      else this.loginError = true;
    })
  }

  logout(){
    this.loginService.logout();
    window.location.reload();
  }

}
