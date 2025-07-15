import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-enable-product',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './enable-product.component.html',
  styleUrls: ['./enable-product.component.scss']
})
export class EnableProductComponent {
  enableProductForm: FormGroup;

  menuItems = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard', active: false },
    { label: 'Enable Product', icon: 'inventory', route: '/enable-product', active: true },
    { label: 'Create Block', icon: 'create', route: '/create-block', active: false }
  ];

  productCodes = [
    { value: 'PROD001', viewValue: 'Product Code 001' },
    { value: 'PROD002', viewValue: 'Product Code 002' },
    { value: 'PROD003', viewValue: 'Product Code 003' }
  ];

  constructor(private fb: FormBuilder) {
    this.enableProductForm = this.fb.group({
      productCode: ['', Validators.required],
      productDescription: ['', Validators.required],
      productBrief: ['', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue]
    });
  }

  onEnable() {
    if (this.enableProductForm.valid) {
      console.log('Form submitted:', this.enableProductForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  onDisable() {
    this.enableProductForm.reset();
  }

  onReset() {
    this.enableProductForm.reset();
  }
}
