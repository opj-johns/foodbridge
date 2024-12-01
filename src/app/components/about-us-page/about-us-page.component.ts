import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-us-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.css'
})
export class AboutUsPageComponent {

}
