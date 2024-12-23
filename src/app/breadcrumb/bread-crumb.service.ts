import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BreadCrumbService {

  constructor(private router : Router) { }

  generateBreadcrumb(route: ActivatedRouteSnapshot): Array<{ label: string; url: string }> {
    const breadcrumbs: Array<{ label: string; url: string }> = [];
    let currentRoute = route;

    while (currentRoute) {
      if (currentRoute.data['breadcrumb']) {
        const url = currentRoute.pathFromRoot
          .map((segment) => segment.url.map((path) => path.path).join('/'))
          .join('/');
        breadcrumbs.push({ label: currentRoute.data['breadcrumb'], url: `/${url}` });
      }
      currentRoute = currentRoute.firstChild!;
    }

    return breadcrumbs;
  }
}
