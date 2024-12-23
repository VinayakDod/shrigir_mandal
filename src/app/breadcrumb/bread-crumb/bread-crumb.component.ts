import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { BreadCrumbService } from '../bread-crumb.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bread-crumb',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './bread-crumb.component.html',
  styleUrl: './bread-crumb.component.css'
})
export class BreadCrumbComponent {

  breadcrumbs: Array<{ label: string; url: string }> = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private breadcrumbService: BreadCrumbService) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.breadcrumbService.generateBreadcrumb(this.activatedRoute.snapshot);
      });
  }
}
