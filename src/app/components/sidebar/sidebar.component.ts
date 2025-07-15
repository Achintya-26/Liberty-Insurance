import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Router } from '@angular/router';

export interface MenuItem {
  label: string;
  icon: string;
  route: string;
  active: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() currentRoute: string = '';

  menuItems: MenuItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: '/app/dashboard', active: false },
    { label: 'Enable Product', icon: 'inventory', route: '/app/enable-product', active: false },
    { label: 'Create Block', icon: 'create', route: '/app/create-block', active: false }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateActiveMenuItem();
  }

  ngOnChanges() {
    this.updateActiveMenuItem();
  }

  private updateActiveMenuItem() {
    this.menuItems.forEach(item => {
      item.active = item.route === this.currentRoute;
    });
  }

  onHelp() {
    console.log('Help clicked');
  }

  onLogout() {
    this.router.navigate(['/login']);
  }
}
