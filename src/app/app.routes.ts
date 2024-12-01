import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { OurWorkPageComponent } from './components/our-work-page/our-work-page.component';
import { GetInvolvedPageComponent } from './components/get-involved-page/get-involved-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { DonateComponent } from './components/donate/donate.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent },
    { path: "about-us", component: AboutUsPageComponent },
    { path: "our-work", component: OurWorkPageComponent },
    { path: "get-involved", component: GetInvolvedPageComponent },
    { path: "contact", component: ContactPageComponent },
    { path: "donate", component: DonateComponent },
];
