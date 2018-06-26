import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// components
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurServicesComponent } from './components/our-services/our-services.component';

import { Routes, RouterModule } from '@angular/router';

// bootstrap module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const appRoutes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'solutions', component: OurServicesComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    HomeComponent,
    AboutUsComponent,
    OurServicesComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
