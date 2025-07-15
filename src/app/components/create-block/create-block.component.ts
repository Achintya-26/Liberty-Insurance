import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-block',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './create-block.component.html',
  styleUrls: ['./create-block.component.scss']
})
export class CreateBlockComponent {
  createBlockForm: FormGroup;

  menuItems = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard', active: false },
    { label: 'Enable Product', icon: 'inventory', route: '/enable-product', active: false },
    { label: 'Create Block', icon: 'create', route: '/create-block', active: true }
  ];

  products = [
    { value: 'apple-watch', viewValue: 'Apple Watch' },
    { value: 'iphone', viewValue: 'iPhone' },
    { value: 'macbook', viewValue: 'MacBook' }
  ];

  sections = [
    { value: 'section1', viewValue: 'Section 1' },
    { value: 'section2', viewValue: 'Section 2' },
    { value: 'section3', viewValue: 'Section 3' }
  ];

  constructor(private fb: FormBuilder) {
    this.createBlockForm = this.fb.group({
      selectProduct: ['', Validators.required],
      blockName: ['', Validators.required],
      section: ['', Validators.required],
      sequence: ['', Validators.required],
      whereClause: ['WHERE PRI_QUOT_SYS_ID = P_POL_SYS_ID AND QUOT_SYS_ID = PRI_QUOT_SYS_ID', Validators.required]
    });
  }

  onMapBlockAndField() {
    if (this.createBlockForm.valid) {
      console.log('Form submitted:', this.createBlockForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
