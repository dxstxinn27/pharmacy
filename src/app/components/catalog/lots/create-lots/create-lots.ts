import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { LotService } from '../../../../services/catalog/lot';
import { MedicationService } from '../../../../services/catalog/medication';
import { MedicationI } from '../../../../models/catalog/medication';

@Component({
  selector: 'app-create-lots',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './create-lots.html',
  styleUrl: './create-lots.css'
})
export class CreateLots {
  form!: FormGroup;
  medications: MedicationI[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private lotService: LotService,
    private medicationService: MedicationService
  ) {
    this.form = this.fb.group(
      {
        code: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
        quantity: [0, [Validators.required, Validators.min(1), Validators.pattern(/^\d+$/)]],
        manufactureDate: ['', [Validators.required]],
        expirationDate: ['', [Validators.required]],
        medicationId: [null, [Validators.required]]
      },
      { validators: [this.dateOrderValidator] }
    );

    this.medicationService.medications$.subscribe(list => this.medications = list);
  }

  // expirationDate > manufactureDate
  private dateOrderValidator = (group: AbstractControl): ValidationErrors | null => {
    const m = group.get('manufactureDate')?.value ? new Date(group.get('manufactureDate')!.value) : null;
    const e = group.get('expirationDate')?.value ? new Date(group.get('expirationDate')!.value) : null;
    if (m && e && e <= m) {
      return { dateOrder: 'Expiration must be after manufacture' };
    }
    return null;
  };

  submit() {
    if (this.form.invalid) return;

    const v = this.form.value;
    this.lotService.addLot({
      code: v.code ?? '',
      quantity: Number(v.quantity ?? 0),
      manufactureDate: new Date(v.manufactureDate),
      expirationDate: new Date(v.expirationDate),
      medicationId: Number(v.medicationId)
    });

    this.router.navigate(['/lots']);
  }

  cancel() {
    this.router.navigate(['/lots']);
  }
}
