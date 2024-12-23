import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AboutUsComponent } from './about/about-us/about-us.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } }, // Default route
  { path: 'about', component: AboutUsComponent, data: { breadcrumb: 'About Us' } },
//   { path: 'gallery', component: GalleryComponent, data: { breadcrumb: 'Gallery' } },
//   { path: 'contact', component: ContactComponent, data: { breadcrumb: 'Contact' } },
  { path: '**', redirectTo: '' },
];
