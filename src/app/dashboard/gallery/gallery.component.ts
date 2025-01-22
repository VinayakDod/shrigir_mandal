import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  selectedImages: Array<{ url: string, description: string }> = [];
  img1: any = "'assets/gallery/2022/img1.JPG'";

  images: Record<string, { url: string; description: string }[]> = {
    '2022': [
      { url: 'assets/gallery/2022/img1.JPG', description: 'Nature Image 1' },
      { url: 'assets/gallery/2022/img2.JPG', description: 'Tech Image 2' },
      { url: 'assets/gallery/2022/img3.JPG', description: 'People Image 3' },
      { url: 'assets/gallery/2022/img4.JPG', description: 'Nature Image 4' },
      { url: 'assets/gallery/2022/img5.JPG', description: 'Tech Image 5' },
      { url: 'assets/gallery/2022/img6.JPG', description: 'People Image 6' },
      { url: 'assets/gallery/2022/img7.JPG', description: 'Nature Image 7' },
      { url: 'assets/gallery/2022/img8.JPG', description: 'Tech Image 8' },
      { url: 'assets/gallery/2022/img9.JPG', description: 'People Image 9' },
      { url: 'assets/gallery/2022/img10.JPG', description: 'Nature Image 10' },
      { url: 'assets/gallery/2022/img11.JPG', description: 'Tech Image 11' },
      { url: 'assets/gallery/2022/img12.JPG', description: 'People Image 12' },
      { url: 'assets/gallery/2022/img13.JPG', description: 'Nature Image 13' },
      { url: 'assets/gallery/2022/img14.JPG', description: 'Tech Image 14' },
      { url: 'assets/gallery/2022/img15.JPG', description: 'People Image 15' },
      { url: 'assets/gallery/2022/img16.JPG', description: 'Nature Image 16' },
      { url: 'assets/gallery/2022/img17.JPG', description: 'Tech Image 17' },
      { url: 'assets/gallery/2022/img18.JPG', description: 'People Image 18' },
      { url: 'assets/gallery/2022/img19.JPG', description: 'Nature Image 19' },
      { url: 'assets/gallery/2022/img20.JPG', description: 'Tech Image 20' },
      { url: 'assets/gallery/2022/img21.JPG', description: 'People Image 21' },
      { url: 'assets/gallery/2022/img22.JPG', description: 'Nature Image 22' },
      { url: 'assets/gallery/2022/img23.JPG', description: 'Tech Image 23' },
      { url: 'assets/gallery/2022/img24.JPG', description: 'People Image 24' },
      { url: 'assets/gallery/2022/img25.JPG', description: 'Nature Image 25' },
      { url: 'assets/gallery/2022/img26.JPG', description: 'Tech Image 26' },
      { url: 'assets/gallery/2022/img27.JPG', description: 'People Image 27' },
      { url: 'assets/gallery/2022/img28.JPG', description: 'Nature Image 28' },
      { url: 'assets/gallery/2022/img29.JPG', description: 'Tech Image 29' },
      { url: 'assets/gallery/2022/img30.JPG', description: 'People Image 30' },
      { url: 'assets/gallery/2022/img31.JPG', description: 'Nature Image 31' },
      { url: 'assets/gallery/2022/img32.JPG', description: 'Tech Image 32' },
      { url: 'assets/gallery/2022/img33.JPG', description: 'People Image 33' },
      { url: 'assets/gallery/2022/img34.JPG', description: 'Nature Image 34' },
      { url: 'assets/gallery/2022/img35.JPG', description: 'Tech Image 35' },
      { url: 'assets/gallery/2022/img36.JPG', description: 'People Image 36' },
      { url: 'assets/gallery/2022/img37.JPG', description: 'Nature Image 37' },
      { url: 'assets/gallery/2022/img38.JPG', description: 'Tech Image 38' },
      { url: 'assets/gallery/2022/img39.JPG', description: 'People Image 39' },
      { url: 'assets/gallery/2022/img40.JPG', description: 'Nature Image 40' },
      { url: 'assets/gallery/2022/img41.JPG', description: 'Tech Image 41' },
      { url: 'assets/gallery/2022/img42.JPG', description: 'People Image 42' },
      { url: 'assets/gallery/2022/img43.JPG', description: 'Nature Image 43' },
      { url: 'assets/gallery/2022/img44.JPG', description: 'Tech Image 44' },
      { url: 'assets/gallery/2022/img45.JPG', description: 'People Image 45' },
      { url: 'assets/gallery/2022/img46.JPG', description: 'Nature Image 46' },
      { url: 'assets/gallery/2022/img47.JPG', description: 'Tech Image 47' },
      { url: 'assets/gallery/2022/img48.JPG', description: 'People Image 48' },
      { url: 'assets/gallery/2022/img49.JPG', description: 'Nature Image 49' },
      { url: 'assets/gallery/2022/img50.JPG', description: 'Tech Image 50' },
      { url: 'assets/gallery/2022/img51.JPG', description: 'People Image 51' },
      { url: 'assets/gallery/2022/img52.JPG', description: 'Nature Image 52' },
      { url: 'assets/gallery/2022/img53.JPG', description: 'Tech Image 53' },
      { url: 'assets/gallery/2022/img54.JPG', description: 'People Image 54' },
      { url: 'assets/gallery/2022/img55.JPG', description: 'Nature Image 55' },
      { url: 'assets/gallery/2022/img56.JPG', description: 'Tech Image 56' },
      { url: 'assets/gallery/2022/img57.JPG', description: 'People Image 57' },
      { url: 'assets/gallery/2022/img58.JPG', description: 'Nature Image 58' },
      { url: 'assets/gallery/2022/img59.JPG', description: 'Tech Image 59' },
      { url: 'assets/gallery/2022/img60.JPG', description: 'People Image 60' },
      { url: 'assets/gallery/2022/img61.JPG', description: 'Nature Image 61' },
      { url: 'assets/gallery/2022/img62.JPG', description: 'Tech Image 62' },
      { url: 'assets/gallery/2022/img63.JPG', description: 'People Image 63' },
      { url: 'assets/gallery/2022/img64.JPG', description: 'Nature Image 64' },
      { url: 'assets/gallery/2022/img65.JPG', description: 'Tech Image 65' },
      { url: 'assets/gallery/2022/img66.JPG', description: 'People Image 66' },
      { url: 'assets/gallery/2022/img67.JPG', description: 'Nature Image 67' },
      { url: 'assets/gallery/2022/img68.JPG', description: 'Tech Image 68' },
      { url: 'assets/gallery/2022/img69.JPG', description: 'People Image 69' },
      { url: 'assets/gallery/2022/img70.JPG', description: 'Nature Image 70' },
      { url: 'assets/gallery/2022/img71.JPG', description: 'Tech Image 71' },
      { url: 'assets/gallery/2022/img72.JPG', description: 'People Image 72' },
      { url: 'assets/gallery/2022/img73.JPG', description: 'Nature Image 73' },
      { url: 'assets/gallery/2022/img74.JPG', description: 'Tech Image 74' }
    ],

    '2023': [
      { url: 'assets/gallery/2023/img1.JPG', description: 'Nature Image 1' },
      { url: 'assets/gallery/2023/img2.JPG', description: 'Tech Image 2' },
      { url: 'assets/gallery/2023/img3.JPG', description: 'People Image 3' },
      { url: 'assets/gallery/2023/img4.JPG', description: 'Nature Image 4' },
      { url: 'assets/gallery/2023/img5.JPG', description: 'Tech Image 5' },
      { url: 'assets/gallery/2023/img6.JPG', description: 'People Image 6' },
      { url: 'assets/gallery/2023/img7.JPG', description: 'Nature Image 7' },
      { url: 'assets/gallery/2023/img8.JPG', description: 'Tech Image 8' },
      { url: 'assets/gallery/2023/img9.JPG', description: 'People Image 9' },
      { url: 'assets/gallery/2023/img10.JPG', description: 'Nature Image 10' },
      { url: 'assets/gallery/2023/img11.JPG', description: 'Tech Image 11' },
      { url: 'assets/gallery/2023/img12.JPG', description: 'People Image 12' },
      { url: 'assets/gallery/2023/img13.JPG', description: 'Nature Image 13' },
      { url: 'assets/gallery/2023/img14.JPG', description: 'Tech Image 14' },
      { url: 'assets/gallery/2023/img15.JPG', description: 'People Image 15' },
      { url: 'assets/gallery/2023/img16.JPG', description: 'Nature Image 16' },
      { url: 'assets/gallery/2023/img17.JPG', description: 'Tech Image 17' },
      { url: 'assets/gallery/2023/img18.JPG', description: 'People Image 18' },
      { url: 'assets/gallery/2023/img19.JPG', description: 'Nature Image 19' },
      { url: 'assets/gallery/2023/img20.JPG', description: 'Tech Image 20' }
    ],

    '2024': [
      { url: 'assets/gallery/2024/img1.JPG', description: 'Image 1' },
      { url: 'assets/gallery/2024/img2.JPG', description: 'Image 2' },
      { url: 'assets/gallery/2024/img3.JPG', description: 'Image 3' },
      { url: 'assets/gallery/2024/img4.JPG', description: 'Image 4' },
      { url: 'assets/gallery/2024/img5.JPG', description: 'Image 5' },
      { url: 'assets/gallery/2024/img6.JPG', description: 'Image 6' },
      { url: 'assets/gallery/2024/img7.JPG', description: 'Image 7' },
      { url: 'assets/gallery/2024/img8.JPG', description: 'Image 8' },
      { url: 'assets/gallery/2024/img9.JPG', description: 'Image 9' },
      { url: 'assets/gallery/2024/img10.JPG', description: 'Image 10' },
      { url: 'assets/gallery/2024/img11.JPG', description: 'Image 11' },
      { url: 'assets/gallery/2024/img12.JPG', description: 'Image 12' },
      { url: 'assets/gallery/2024/img13.JPG', description: 'Image 13' },
      { url: 'assets/gallery/2024/img14.JPG', description: 'Image 14' },
      { url: 'assets/gallery/2024/img15.JPG', description: 'Image 15' },
      { url: 'assets/gallery/2024/img16.JPG', description: 'Image 16' },
      { url: 'assets/gallery/2024/img17.JPG', description: 'Image 17' },
      { url: 'assets/gallery/2024/img18.JPG', description: 'Image 18' },
      { url: 'assets/gallery/2024/img19.JPG', description: 'Image 19' },
      { url: 'assets/gallery/2024/img20.JPG', description: 'Image 20' },
      { url: 'assets/gallery/2024/img21.JPG', description: 'Image 21' },
      { url: 'assets/gallery/2024/img22.JPG', description: 'Image 22' },
      { url: 'assets/gallery/2024/img23.JPG', description: 'Image 23' },
      { url: 'assets/gallery/2024/img24.JPG', description: 'Image 24' },
      { url: 'assets/gallery/2024/img25.JPG', description: 'Image 25' },
      { url: 'assets/gallery/2024/img26.JPG', description: 'Image 26' },
      { url: 'assets/gallery/2024/img27.JPG', description: 'Image 27' },
      { url: 'assets/gallery/2024/img28.JPG', description: 'Image 28' },
      { url: 'assets/gallery/2024/img29.JPG', description: 'Image 29' },
      { url: 'assets/gallery/2024/img30.JPG', description: 'Image 30' },
      { url: 'assets/gallery/2024/img31.JPG', description: 'Image 31' },
      { url: 'assets/gallery/2024/img32.JPG', description: 'Image 32' },
      { url: 'assets/gallery/2024/img33.JPG', description: 'Image 33' },
      { url: 'assets/gallery/2024/img34.JPG', description: 'Image 34' },
      { url: 'assets/gallery/2024/img35.JPG', description: 'Image 35' },
      { url: 'assets/gallery/2024/img36.JPG', description: 'Image 36' },
      { url: 'assets/gallery/2024/img37.JPG', description: 'Image 37' },
      { url: 'assets/gallery/2024/img38.JPG', description: 'Image 38' },
      { url: 'assets/gallery/2024/img39.JPG', description: 'Image 39' },
      { url: 'assets/gallery/2024/img40.JPG', description: 'Image 40' },
      { url: 'assets/gallery/2024/img41.JPG', description: 'Image 41' },
      { url: 'assets/gallery/2024/img42.JPG', description: 'Image 42' },
      { url: 'assets/gallery/2024/img43.JPG', description: 'Image 43' },
      { url: 'assets/gallery/2024/img44.JPG', description: 'Image 44' },
      { url: 'assets/gallery/2024/img45.JPG', description: 'Image 45' },
      { url: 'assets/gallery/2024/img46.JPG', description: 'Image 46' },
      { url: 'assets/gallery/2024/img47.JPG', description: 'Image 47' },
      { url: 'assets/gallery/2024/img48.JPG', description: 'Image 48' },
      { url: 'assets/gallery/2024/img49.JPG', description: 'Image 49' },
      { url: 'assets/gallery/2024/img50.JPG', description: 'Image 50' },
      { url: 'assets/gallery/2024/img51.JPG', description: 'Image 51' },
      { url: 'assets/gallery/2024/img52.JPG', description: 'Image 52' },
      { url: 'assets/gallery/2024/img53.JPG', description: 'Image 53' }
    ]

  };


  // Function to load images based on selected year
  loadImages(year: string) {
    this.selectedImages = this.images[year] || [];
  }

  // // Function to download image
  // downloadImage(url: string) {
  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.download = url.split('/').pop() || 'image.jpg';
  //   link.click();
  // }


  downloadImage(url: string) {
    // Fetch the image as a Blob
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        // Create a temporary URL for the Blob
        const urlBlob = URL.createObjectURL(blob);

        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = urlBlob;
        link.download = url.split('/').pop() || 'image.jpg';

        // Trigger the download
        link.click();

        // Revoke the temporary URL to free up resources
        URL.revokeObjectURL(urlBlob);
      })
      .catch((error) => {
        console.error('Error downloading the image:', error);
      });
  }


}
