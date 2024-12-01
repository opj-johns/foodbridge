import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-involved',
  imports: [],
  standalone: true,
  templateUrl: './get-involved.component.html',
  styleUrl: './get-involved.component.css'
})
export class GetInvolvedComponent {
  constructor(private router: Router) { }
  getInvolved() {
    this.router.navigateByUrl("/get-involved");
    // throw new Error('Method not implemented.');
  }

}
