import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-arg',
  templateUrl: './logo-arg.component.html',
  styleUrls: ['./logo-arg.component.css']
})
export class LogoARGComponent {
  
  constructor(private router: Router) {}
  

  login(){
    this.router.navigate(['/login']);
  }
}
