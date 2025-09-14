import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CustomerService } from '../../../../services/customers/customer';

@Component({
  selector: 'app-create-customers',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './create-customers.html',
  styleUrl: './create-customers.css'
})
export class CreateCustomers {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private customerService: CustomerService
  ) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]],
      phone: ['', [Validators.pattern(/^\+?[0-9\s\-]{7,20}$/)]],
      email: ['', [Validators.email]],
      address: ['', [Validators.maxLength(120)]],
      status: ['ACTIVE', [Validators.required]]
    });
  }

  submit() {
    if (this.form.invalid) return;
    const v = this.form.value;
    this.customerService.addCustomer({
      firstName: v.firstName ?? '',
      lastName: v.lastName ?? '',
      phone: v.phone ?? '',
      email: v.email ?? '',
      address: v.address ?? '',
      status: (v.status === 'ACTIVE' || v.status === 'INACTIVE') ? v.status : 'ACTIVE'
    });
    this.router.navigate(['/customers']);
  }

  cancel() {
    this.router.navigate(['/customers']);
  }
}
