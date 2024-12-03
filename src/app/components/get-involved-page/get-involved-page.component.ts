import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-get-involved-page',
    imports: [CommonModule, RouterLinkActive, RouterLink],
    standalone: true,
    templateUrl: './get-involved-page.component.html',
    styleUrl: './get-involved-page.component.css'
})
export class GetInvolvedPageComponent {

}
