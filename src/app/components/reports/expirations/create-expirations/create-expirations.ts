import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { ExpirationsService } from '../../../../services/reports/expiration';
import { MedicationService } from '../../../../services/catalog/medication';
import { LotService } from '../../../../services/catalog/lot';
import { MedicationI } from '../../../../models/catalog/medication';
import { LotI } from '../../../../models/catalog/lot';

@Component({
  selector: 'app-create-expirations',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './create-expirations.html',
  styleUrl: './create-expirations.css'
})
export class CreateExpirations {
  form!: FormGroup;
  medications: MedicationI[] = [];
  lotsAll: LotI[] = [];
  lotsFiltered: LotI[] = [];
  selectedLot?: LotI;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private expService: ExpirationsService,
    private medService: MedicationService,
    private lotService: LotService
  ) {
    this.form = this.fb.group({
      medicationId: [null, [Validators.required]],
      lotId: [null, [Validators.required]],
      expirationDate: [{ value: '', disabled: true }, [Validators.required]],
      quantity: [0, [Validators.required, Validators.min(1), Validators.pattern(/^\d+$/)]]
    });

    this.medService.medications$.subscribe(m => this.medications = m);
    this.lotService.lots$.subscribe(l => {
      this.lotsAll = l;
      this.filterLotsByMedication(); // refresca si cambió lista
      this.applyLotDefaults();
    });

    // Filtrar lotes al cambiar medicamento
    this.form.get('medicationId')?.valueChanges.subscribe(() => {
      this.filterLotsByMedication();
      // al cambiar de medicamento, resetea lote elegido y campos dependientes
      this.form.get('lotId')?.setValue(null);
      this.selectedLot = undefined;
      this.form.get('expirationDate')?.setValue('');
      this.updateQuantityMaxValidator(0);
    });

    // Al cambiar lote, setear fecha de expiración y validar cantidad máxima
    this.form.get('lotId')?.valueChanges.subscribe(() => {
      this.applyLotDefaults();
    });
  }

  private filterLotsByMedication() {
    const medId = Number(this.form.get('medicationId')?.value);
    this.lotsFiltered = this.lotsAll.filter(l => Number(l.medicationId) === medId);
  }

  private applyLotDefaults() {
    const lotId = Number(this.form.get('lotId')?.value);
    const lot = this.lotsAll.find(l => l.id === lotId);
    this.selectedLot = lot;

    // ExpirationDate desde el lote (solo lectura en el form)
    const lotExp = lot?.expirationDate ? new Date(lot.expirationDate) : null;
    const inputDate = lotExp ? lotExp.toISOString().slice(0, 10) : '';
    this.form.get('expirationDate')?.setValue(inputDate);

    // Validar cantidad máxima según cantidad del lote
    const maxQty = Number(lot?.quantity ?? 0);
    this.updateQuantityMaxValidator(maxQty);
  }

  private updateQuantityMaxValidator(maxQty: number) {
    const ctrl = this.form.get('quantity');
    ctrl?.setValidators([
      Validators.required,
      Validators.min(1),
      Validators.pattern(/^\d+$/),
      ...(maxQty > 0 ? [Validators.max(maxQty)] : [])
    ]);
    ctrl?.updateValueAndValidity({ emitEvent: false });
  }

  submit() {
    if (this.form.invalid) return;
    const raw = this.form.getRawValue(); // incluye disabled
    this.expService.add({
      medicationId: Number(raw.medicationId),
      lotId: Number(raw.lotId),
      expirationDate: new Date(raw.expirationDate),
      quantity: Number(raw.quantity)
    });
    this.router.navigate(['/expirations']);
  }

  cancel() {
    this.router.navigate(['/expirations']);
  }
}
