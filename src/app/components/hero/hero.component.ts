import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  constructor(private router: Router) { }
  learnMore() {
    // throw new Error('Method not implemented.');
  }
  donate() {
    this.router.navigate(["/donate"]);
    // throw new Error('Method not implemented.');
  }

}
