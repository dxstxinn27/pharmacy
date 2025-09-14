import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SaleI } from '../../models/sales/new';
import { SaleDetailI } from '../../models/sales/detail';

@Injectable({ providedIn: 'root' })
export class SaleService {
  private readonly _state = new BehaviorSubject<SaleI[]>([
    {
      id: 1,
      customerId: 1,
      saleDate: new Date(),
      totalAmount: 13600,
      details: [{ id: 1, saleId: 1, medicationId: 1, quantity: 2, price: 6800, subtotal: 13600 }],
    },
  ]);

  readonly sales$ = this._state.asObservable();
  private get value(): SaleI[] {
    return this._state.value;
  }

  getSales(): SaleI[] {
    return this.value;
  }

  addSale(sale: Omit<SaleI, 'id' | 'totalAmount'>): SaleI {
    const nextId = this.value.length ? Math.max(...this.value.map((s) => s.id ?? 0)) + 1 : 1;

    const details: SaleDetailI[] = (sale.details ?? []).map((d, idx) => {
      const qty = Number(d.quantity ?? 0);
      const price = Number(d.price ?? 0);
      return {
        id: idx + 1,
        saleId: nextId,
        medicationId: Number(d.medicationId),
        quantity: qty,
        price,
        subtotal: qty * price,
      };
    });

    const totalAmount = details.reduce((acc, d) => acc + d.subtotal, 0);

    const newSale: SaleI = {
      id: nextId,
      customerId: Number(sale.customerId),
      saleDate: new Date(sale.saleDate),
      totalAmount,
      details,
    };

    this._state.next([...this.value, newSale]);
    return newSale;
  }

  deleteSale(id: number): void {
    this._state.next(this.value.filter((s) => s.id !== id));
  }
}
