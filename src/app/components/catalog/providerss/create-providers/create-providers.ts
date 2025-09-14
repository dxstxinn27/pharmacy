import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProviderService } from '../../../../services/catalog/provider';

@Component({
  selector: 'app-create-providers',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './create-providers.html',
  styleUrl: './create-providers.css'
})
export class CreateProviders {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private providerService: ProviderService
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      contactName: ['', [Validators.maxLength(80)]],
      phone: ['', [Validators.pattern(/^\+?[0-9\s\-]{7,20}$/)]],
      email: ['', [Validators.email]],
      address: ['', [Validators.maxLength(120)]]
    });
  }

  submit() {
    if (this.form.invalid) return;
    const { name, contactName, phone, email, address } = this.form.value;
    this.providerService.addProvider({
      name: name ?? '',
      contactName: contactName ?? '',
      phone: phone ?? '',
      email: email ?? '',
      address: address ?? ''
    });
    this.router.navigate(['/providers']);
  }

  cancel() {
    this.router.navigate(['/providers']);
  }
}
