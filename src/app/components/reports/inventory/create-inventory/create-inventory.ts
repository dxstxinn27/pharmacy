import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { InventoryService } from '../../../../services/reports/inventory';
import { MedicationService } from '../../../../services/catalog/medication';
import { MedicationI } from '../../../../models/catalog/medication';

@Component({
  selector: 'app-create-inventory',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './create-inventory.html',
  styleUrl: './create-inventory.css'
})
export class CreateInventory {
  form!: FormGroup;
  medications: MedicationI[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private invService: InventoryService,
    private medService: MedicationService
  ) {
    this.form = this.fb.group({
      medicationId: [null, [Validators.required]],
      currentStock: [0, [Validators.required, Validators.min(0), Validators.pattern(/^\d+$/)]],
      minimumStock: [0, [Validators.required, Validators.min(0), Validators.pattern(/^\d+$/)]]
    });

    this.medService.medications$.subscribe(m => this.medications = m);

    // Al cambiar medicamento, precarga currentStock desde el medicamento (si existe)
    this.form.get('medicationId')?.valueChanges.subscribe((id: number) => {
      const med = this.medications.find(x => x.id === Number(id));
      if (med && typeof med.stock === 'number') {
        this.form.get('currentStock')?.setValue(med.stock);
      }
    });
  }

  submit() {
    if (this.form.invalid) return;
    const v = this.form.value;
    this.invService.upsert({
      medicationId: Number(v.medicationId),
      currentStock: Number(v.currentStock),
      minimumStock: Number(v.minimumStock)
    });
    this.router.navigate(['/inventory']);
  }

  cancel() {
    this.router.navigate(['/inventory']);
  }
}
