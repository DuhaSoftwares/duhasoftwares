import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) {}

  navigateToSection(section: string): void {
    // Navigate to the specific section
    this.router.navigate([], { fragment: section, relativeTo: this.route }).then(() => {
      // Scroll to the fragment after navigation
      this.viewportScroller.scrollToAnchor(section);
    });
  }
}
