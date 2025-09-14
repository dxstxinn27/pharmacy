import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TaxService } from '../../../services/taxes/taxe';

@Component({
  selector: 'app-create-taxes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './create-taxes.html',
  styleUrl: './create-taxes.css'
})
export class CreateTaxes {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private taxService: TaxService
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]],
      percentage: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      description: ['', [Validators.maxLength(200)]]
    });
  }

  submit() {
    if (this.form.invalid) return;
    const v = this.form.value;
    this.taxService.addTax({
      name: v.name ?? '',
      percentage: Number(v.percentage ?? 0),
      description: v.description ?? ''
    });
    this.router.navigate(['/taxes']);
  }

  cancel() {
    this.router.navigate(['/taxes']);
  }
}
