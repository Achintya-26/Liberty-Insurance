import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

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
    MatIconModule
  ],
  templateUrl: './enable-product.component.html',
  styleUrls: ['./enable-product.component.scss']
})
export class EnableProductComponent {
  enableProductForm: FormGroup;

  productCodes = [
    { value: 'PROD001', viewValue: 'Product Code 001' },
    { value: 'PROD002', viewValue: 'Product Code 002' },
    { value: 'PROD003', viewValue: 'Product Code 003' }
  ];

  constructor(private fb: FormBuilder, private router: Router) {
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
      // Redirect to Create Block page after successful form submission
      this.router.navigate(['/app/create-block']);
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
