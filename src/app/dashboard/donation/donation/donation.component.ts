import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-donation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.css'
})
export class DonationComponent {
  names: string[] = ['Vinayak B Dodakundi', 'Channabasappa Elagi', 'Vinod Mantap', 'Mallu Mantap', 'Balasingh Hajeri','Ganesh Hajeri','Buda Hajeri','Sovevamshi','Gurulinga','Pargond','Nashi Raju'];

}
