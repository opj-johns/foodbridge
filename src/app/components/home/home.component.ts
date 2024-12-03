import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroComponent } from "./../hero/hero.component";
import { OurWorkComponent } from '../our-work/our-work.component';
import { GetInvolvedComponent } from "../get-involved/get-involved.component";
import { AboutUsComponent } from "../about-us/about-us.component";

@Component({
    selector: 'app-home',
    imports: [CommonModule, HeroComponent, OurWorkComponent, GetInvolvedComponent, AboutUsComponent],
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {



}
