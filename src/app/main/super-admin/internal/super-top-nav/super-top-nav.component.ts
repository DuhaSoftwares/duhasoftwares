import { Component } from '@angular/core';

@Component({
  selector: 'app-super-top-nav',
  templateUrl: './super-top-nav.component.html',
  styleUrls: ['./super-top-nav.component.scss']
})
export class SuperTopNavComponent {
  toggleSideNav() {
    document.getElementById('sidebar-wrapper')?.classList.toggle('toggled');
  }
}
