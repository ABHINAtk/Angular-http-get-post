// src/app/show-details/show-details.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
 // styleUrls: './show-details.component.css'
})
export class ShowDetailsComponent {
  detailsForm: FormGroup;
  details: any;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.detailsForm = this.fb.group({
      id: [''],
    });
  }

  fetchAllDetails() {
    this.dataService.getAllUsers().subscribe(data => {
      this.details = data;
    });
  }

  fetchDetailsById() {
    const id = this.detailsForm.get('id')!.value;
    this.dataService.getUserById(id).subscribe(data => {
      this.details = [data];
    });
  }
}


