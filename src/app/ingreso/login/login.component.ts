import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// import { NavResponsiveComponent } from '../../index/nav-responsive/nav-responsive.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide = true;

  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  getErrorMessage() {
    return this.email.hasError('required') ? ' Tu Correo' :
    this.email.hasError('email') ? 'Email invalido' : '';
  }

}
