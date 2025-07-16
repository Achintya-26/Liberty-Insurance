import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
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
    MatIconModule
  ],
  templateUrl: './create-block.component.html',
  styleUrls: ['./create-block.component.scss']
})
export class CreateBlockComponent implements OnInit {
  
  ngOnInit(){
    this.showMapSection = history.state['showMap'];
    // console.log("Received Data:", this.showMapSection);
  }

  createBlockForm: FormGroup;
  mapBlockForm: FormGroup;
  showMapSection: boolean = false;
  

  products = [
    { value: 'apple-watch', viewValue: 'Apple Watch' },
    { value: 'iphone', viewValue: 'iPhone' },
    { value: 'macbook', viewValue: 'MacBook' },
    { value: 'motor-private', viewValue: 'Motor Private' }
  ];

  sections = [
    { value: 'section1', viewValue: 'Section 1' },
    { value: 'section2', viewValue: 'Section 2' },
    { value: 'section3', viewValue: 'Section 3' }
  ];

  tables = [
    { value: 'table1', viewValue: 'Table 1' },
    { value: 'table2', viewValue: 'Table 2' },
    { value: 'table3', viewValue: 'Table 3' }
  ];

  fields = [
    { value: 'field1', viewValue: 'Field 1' },
    { value: 'field2', viewValue: 'Field 2' },
    { value: 'field3', viewValue: 'Field 3' }
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.createBlockForm = this.fb.group({
      selectProduct: ['', Validators.required],
      blockName: ['', Validators.required],
      section: ['', Validators.required],
      sequence: ['', Validators.required],
      whereClause: ['WHERE PRI_QUOT_SYS_ID = P_POL_SYS_ID AND QUOT_SYS_ID = PRI_QUOT_SYS_ID', Validators.required]
    });

    this.mapBlockForm = this.fb.group({
      selectProduct: ['apple-watch', Validators.required],
      serialNumber: ['', Validators.required],
      apiTagName: ['', Validators.required],
      mapDataElement: ['', Validators.required],
      tableFrom: ['', Validators.required],
      tableTo: ['', Validators.required],
      fieldFrom: ['', Validators.required],
      fieldTo: ['', Validators.required]
    });
  }

  onMapBlockAndField() {
    if (this.createBlockForm.valid) {
      console.log('Create Block Form submitted:', this.createBlockForm.value);
      this.showMapSection = true;
    } else {
      console.log('Create Block Form is invalid');
    }
  }

  onSubmitMapping() {
    if (this.mapBlockForm.valid) {
      console.log('Map Block Form submitted:', this.mapBlockForm.value);
      // Handle form submission
    } else {
      console.log('Map Block Form is invalid');
    }
  }

  onBackToCreateBlock() {
    this.showMapSection = false;
  }
}
