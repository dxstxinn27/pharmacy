import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { PaymentService } from '../../../services/payments/payment';
import { SaleService } from '../../../services/sales/sale';
import { CustomerService, CustomerI } from '../../../services/customers/customer';
import { PaymentI } from '../../../models/payments/payment';
import { SaleI } from '../../../models/sales/new';

@Component({
  selector: 'app-create-payments',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './create-payments.html',
  styleUrl: './create-payments.css'
})
export class CreatePayments {
  form!: FormGroup;
  sales: SaleI[] = [];
  customersById: Record<number, CustomerI> = {};
  currentBalance = 0;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private paymentService: PaymentService,
    private saleService: SaleService,
    private customerService: CustomerService
  ) {
    this.form = this.fb.group({
      saleId: [null, [Validators.required]],
      amount: [0, [Validators.required, Validators.min(0.01)]],
      paymentDate: [new Date().toISOString().slice(0, 16), [Validators.required]], // yyyy-MM-ddTHH:mm
      method: ['cash', [Validators.required]]
    });

    this.saleService.sales$.subscribe(s => this.sales = s);
    this.customerService.customers$.subscribe(list => {
      this.customersById = Object.fromEntries(list.map(c => [c.id!, c]));
    });

    // actualizar validación de monto según saldo
    this.form.get('saleId')?.valueChanges.subscribe(() => this.updateBalanceValidator());
    this.form.get('amount')?.valueChanges.subscribe(() => this.updateBalanceValidator());
  }

  private calcPaid(saleId: number): number {
    return this.paymentService.getBySaleId(saleId).reduce((a, p) => a + (p.amount ?? 0), 0);
  }

  private updateBalanceValidator() {
    const saleId = Number(this.form.get('saleId')?.value);
    const sale = this.sales.find(s => s.id === saleId);
    if (!sale) {
      this.currentBalance = 0;
      return;
    }
    const paid = this.calcPaid(saleId);
    this.currentBalance = Math.max(+(sale.totalAmount - paid).toFixed(2), 0);
    const amountCtrl = this.form.get('amount');
    amountCtrl?.setValidators([
      Validators.required,
      Validators.min(0.01),
      Validators.max(this.currentBalance || 0)
    ]);
    amountCtrl?.updateValueAndValidity({ emitEvent: false });
  }

  customerName(s: SaleI): string {
    const c = this.customersById[s.customerId];
    return c ? `${c.firstName} ${c.lastName}` : `Customer #${s.customerId}`;
  }

  submit() {
    if (this.form.invalid) return;

    const v = this.form.value;
    const saleId = Number(v.saleId);
    const amount = Number(v.amount);

    // seguridad extra: no permitir exceder saldo
    const sale = this.sales.find(s => s.id === saleId);
    const paid = this.calcPaid(saleId);
    const balance = sale ? sale.totalAmount - paid : 0;
    if (amount > balance) return;

    this.paymentService.addPayment({
      saleId,
      amount,
      paymentDate: new Date(v.paymentDate),
      method: String(v.method)
    } as Omit<PaymentI, 'id'>);

    this.router.navigate(['/payments']);
  }

  cancel() {
    this.router.navigate(['/payments']);
  }
}
