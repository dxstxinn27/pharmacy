import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { SaleDetailService } from '../../../../services/sales/detail';
import { SaleService } from '../../../../services/sales/sale';
import { MedicationService } from '../../../../services/catalog/medication';

import { SaleI } from '../../../../models/sales/new';
import { MedicationI } from '../../../../models/catalog/medication';

@Component({
  selector: 'app-create-sales-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './create-sales-detail.html',
  styleUrl: './create-sales-detail.css'
})
export class CreateSalesDetail {
  form!: FormGroup;
  sales: SaleI[] = [];
  medications: MedicationI[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sdService: SaleDetailService,
    private saleService: SaleService,
    private medService: MedicationService
  ) {
    this.form = this.fb.group({
      saleId: [null, [Validators.required]],
      medicationId: [null, [Validators.required]],
      quantity: [1, [Validators.required, Validators.min(1), Validators.pattern(/^\d+$/)]],
      price: [0, [Validators.required, Validators.min(0)]],
      subtotal: [{ value: 0, disabled: true }]
    });

    this.saleService.sales$.subscribe(s => this.sales = s);
    this.medService.medications$.subscribe(m => this.medications = m);

    // recalcular subtotal
    this.form.valueChanges.subscribe(v => {
      const qty = Number(v.quantity ?? 0);
      const price = Number(v.price ?? 0);
      const subtotal = +(qty * price).toFixed(2);
      this.form.get('subtotal')?.setValue(subtotal, { emitEvent: false });
    });
  }

  onMedicationChange() {
    const medId = Number(this.form.get('medicationId')?.value);
    const med = this.medications.find(m => m.id === medId);
    if (med) this.form.get('price')?.setValue(med.price);
  }

  submit() {
    if (this.form.invalid) return;
    const raw = this.form.getRawValue();
    this.sdService.add({
      saleId: Number(raw.saleId),
      medicationId: Number(raw.medicationId),
      quantity: Number(raw.quantity),
      price: Number(raw.price),
      subtotal: Number(raw.subtotal)
    });
    this.router.navigate(['/sales-detail']);
  }

  cancel() {
    this.router.navigate(['/sales-detail']);
  }
}
