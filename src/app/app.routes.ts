import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AboutUsComponent } from './dashboard/about/about-us/about-us.component';
import { DonationComponent } from './dashboard/donation/donation/donation.component';
import { GalleryComponent } from './dashboard/gallery/gallery.component';

export const routes: Routes = [
    { path: '', component: HomeComponent}, // Default route
    { path: 'about', component: AboutUsComponent},
    { path: 'donation', component: DonationComponent},
    { path: 'gallery', component: GalleryComponent},
    //   { path: 'contact', component: ContactComponent, data: { breadcrumb: 'Contact' } },
    { path: '**', redirectTo: '' },
];
