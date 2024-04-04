import { FormsModule, NgForm } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user = {
    fullname: '',
    username: '',
    email: '',
    address: '',
    dateOfBirth: '',
    password: '',
    phoneNumber: ''
  };
  onSubmit(): void {
    console.log(this.user);
  }
  
}
