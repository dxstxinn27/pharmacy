import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { SaleService } from '../../../../services/sales/sale';
import { CustomerService, CustomerI } from '../../../../services/customers/customer';
import { MedicationService } from '../../../../services/catalog/medication';
import { MedicationI } from '../../../../models/catalog/medication';

@Component({
  selector: 'app-create-sales',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './create-sales.html',
  styleUrl: './create-sales.css'
})
export class CreateSales {
  form!: FormGroup;
  customers: CustomerI[] = [];
  medications: MedicationI[] = [];

  get details(): FormArray {
    return this.form.get('details') as FormArray;
  }
  // ✅ Getter con tipo fuerte para la plantilla
  get detailsControls(): FormGroup[] {
    return this.details.controls as FormGroup[];
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private saleService: SaleService,
    private customerService: CustomerService,
    private medicationService: MedicationService
  ) {
    this.form = this.fb.group({
      customerId: [null, [Validators.required]],
      saleDate: [new Date().toISOString().slice(0, 16)], // yyyy-MM-ddTHH:mm
      details: this.fb.array([])
    });

    this.customerService.customers$.subscribe(list => {
      this.customers = list.filter(c => c.status === 'ACTIVE');
    });
    this.medicationService.medications$.subscribe(list => {
      this.medications = list;
    });

    this.addDetail();
  }

  addDetail() {
    const group = this.fb.group({
      medicationId: [null, [Validators.required]],
      quantity: [1, [Validators.required, Validators.min(1), Validators.pattern(/^\d+$/)]],
      price: [0, [Validators.required, Validators.min(0)]],
      subtotal: [{ value: 0, disabled: true }] // ✅ ya queda disabled aquí
    });

    group.valueChanges.subscribe(v => {
      const qty = Number(v.quantity ?? 0);
      const price = Number(v.price ?? 0);
      const subtotal = +(qty * price).toFixed(2);
      group.get('subtotal')?.setValue(subtotal, { emitEvent: false });
    });

    this.details.push(group);
  }

  removeDetail(i: number) {
    if (this.details.length > 1) this.details.removeAt(i);
  }

  onMedicationChange(g: FormGroup) {
    const medId = Number(g.get('medicationId')?.value);
    const med = this.medications.find(m => m.id === medId);
    if (med) g.get('price')?.setValue(med.price);
  }

  total(): number {
    return this.details.controls.reduce((acc, g) => acc + Number(g.get('subtotal')?.value ?? 0), 0);
  }

  submit() {
    if (this.form.invalid || this.details.length === 0) return;

    const raw = this.form.getRawValue();
    this.saleService.addSale({
      customerId: Number(raw.customerId),
      saleDate: new Date(raw.saleDate),
      details: raw.details.map((d: any) => ({
        medicationId: Number(d.medicationId),
        quantity: Number(d.quantity),
        price: Number(d.price),
        subtotal: Number(d.subtotal)
      }))
    });

    this.router.navigate(['/sales']);
  }

  cancel() {
    this.router.navigate(['/sales']);
  }
}
