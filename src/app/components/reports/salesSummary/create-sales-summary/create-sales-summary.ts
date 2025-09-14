import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { SalesSummaryService } from '../../../../services/reports/sales-summary';
import { SaleService } from '../../../../services/sales/sale';

@Component({
  selector: 'app-create-sales-summary',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './create-sales-summary.html',
  styleUrl: './create-sales-summary.css'
})
export class CreateSalesSummary {
  form!: FormGroup;

  // vista previa simple
  preview = { totalSales: 0, totalAmount: 0 };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private summaryService: SalesSummaryService,
    private saleService: SaleService
  ) {
    const today = new Date();
    const yyyymmdd = (d: Date) => d.toISOString().slice(0, 10);

    this.form = this.fb.group({
      startDate: [yyyymmdd(today), [Validators.required]],
      endDate:   [yyyymmdd(today), [Validators.required]]
    });

    this.form.valueChanges.subscribe(() => this.updatePreview());
    this.updatePreview();
  }

  private updatePreview() {
    const start = this.form.get('startDate')?.value;
    const end = this.form.get('endDate')?.value;
    if (!start || !end) {
      this.preview = { totalSales: 0, totalAmount: 0 };
      return;
    }
    const s = new Date(start);
    const e = new Date(end);
    e.setHours(23, 59, 59, 999);

    const all = this.saleService.getSales();
    const inRange = all.filter(x => {
      const d = new Date(x.saleDate);
      return d >= new Date(s.setHours(0, 0, 0, 0)) && d <= e;
    });

    const totalSales = inRange.length;
    const totalAmount = +inRange.reduce((acc, x) => acc + (x.totalAmount ?? 0), 0).toFixed(2);
    this.preview = { totalSales, totalAmount };
  }

  submit() {
    if (this.form.invalid) return;
    const start = new Date(this.form.value.startDate);
    const end = new Date(this.form.value.endDate);
    this.summaryService.createFromRange(start, end, /*includeSales*/ true);
    this.router.navigate(['/sales-summary']);
  }

  cancel() {
    this.router.navigate(['/sales-summary']);
  }
}
