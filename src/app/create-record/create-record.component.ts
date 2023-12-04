import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.css']
})
export class CreateRecordComponent {
  recordForm: FormGroup;
  successMessage: string | null = null;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.recordForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required], 
      phone: ['', Validators.required],    
    });
  }

  onSubmit() {
    if (this.recordForm.valid) {
      this.dataService.createUser(this.recordForm.value).subscribe(response => {
        console.log('User created successfully:', response);
        this.successMessage = 'User created successfully!';
        this.recordForm.reset();
      
        
      }, error => {
        console.error('Error creating user:', error);
        console.error('Error creating user:', error);
        this.successMessage = null; 
        
      });
    }
  }

}


