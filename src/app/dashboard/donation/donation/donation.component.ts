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
  names: string[] = ['Shivu Kambar', 
    'Vinayak B Dodakundi', 
    'Channabasappa Elagi', 
    'Guru Pujari ', 
    'Mallu Hiremath', 
    'Ganesh Hajeri', 
    'Naveen Jumnal', 
    'Arun Gadagi', 
    'Appu Jumnal', 
    'Modi Guru', 
    'Prashant Gadagi', 
    'Pundu (Ganvdi)', 
    'Puttu T', 
    'Sachin Gadagi', 
    'Prakash Dodimanni', 
    'Shivu ', 
    'Basavaraj Jumanal', 
    'Swami Chikkamt', 
    'Guru Bijjaragi', 
    'Ishwar Kabade', 
    'Jagdish', 
    'Mallikarjun Manashetti', 
    'Malingaray Toravi',];

}
