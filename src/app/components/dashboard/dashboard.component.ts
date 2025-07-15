import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

export interface ProductData {
  productName: string;
  productFeature: string;
  date: string;
  status: string;
  action: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatChipsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  displayedColumns: string[] = ['productName', 'productFeature', 'date', 'status', 'action'];
  
  dataSource: ProductData[] = [
    {
      productName: 'Apple Watch',
      productFeature: '6096 Marjolaine Landing',
      date: '12.09.2019 - 12.53 PM',
      status: 'Delivered',
      action: 'Edit Product'
    },
    {
      productName: 'Apple Watch',
      productFeature: '6096 Marjolaine Landing',
      date: '12.09.2019 - 12.53 PM',
      status: 'Pending',
      action: 'Edit Product'
    },
    {
      productName: 'Apple Watch',
      productFeature: '6096 Marjolaine Landing',
      date: '12.09.2019 - 12.53 PM',
      status: 'Disabled',
      action: 'Edit Product'
    }
  ];

  menuItems = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard', active: true },
    { label: 'Enable Product', icon: 'inventory', route: '/enable-product', active: false },
    { label: 'Create Block', icon: 'create', route: '/create-block', active: false }
  ];

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'status-delivered';
      case 'pending':
        return 'status-pending';
      case 'disabled':
        return 'status-disabled';
      default:
        return '';
    }
  }
}
