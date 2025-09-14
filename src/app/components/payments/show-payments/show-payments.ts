import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

import { PaymentService } from '../../../services/payments/payment';
import { PaymentI } from '../../../models/payments/payment';
import { SaleService } from '../../../services/sales/sale';
import { CustomerService, CustomerI } from '../../../services/customers/customer';

@Component({
  selector: 'app-show-payments',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterModule],
  templateUrl: './show-payments.html',
  styleUrl: './show-payments.css',
  encapsulation: ViewEncapsulation.None
})
export class ShowPayments {
  payments: PaymentI[] = [];
  customerById: Record<number, CustomerI> = {};
  saleTotalById: Record<number, number> = {};

  constructor(
    private paymentService: PaymentService,
    private saleService: SaleService,
    private customerService: CustomerService
  ) {
    this.paymentService.payments$.subscribe(list => this.payments = list);
    this.customerService.customers$.subscribe(list => {
      this.customerById = Object.fromEntries(list.map(c => [c.id!, c]));
    });
    this.saleService.sales$.subscribe(sales => {
      this.saleTotalById = Object.fromEntries(sales.map(s => [s.id!, s.totalAmount]));
    });
  }

  customerNameBySaleId(saleId: number): string {
    const sale = Object.entries(this.saleTotalById).find(([id]) => Number(id) === saleId);
    // para el nombre, buscamos la venta en saleService (no guardamos map completo aquí para mantenerlo liviano)
    const s = this.saleService.getSales().find(x => x.id === saleId);
    if (!s) return `Sale #${saleId}`;
    const c = this.customerById[s.customerId];
    return c ? `${c.firstName} ${c.lastName}` : `Customer #${s.customerId}`;
  }
}
