import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SaleDetailI } from '../../models/sales/detail';

@Injectable({ providedIn: 'root' })
export class SaleDetailService {
  private readonly _state = new BehaviorSubject<SaleDetailI[]>([
    // Ejemplo (asegúrate de que existan saleId=1 y medicationId=1)
    { id: 1, saleId: 1, medicationId: 1, quantity: 2, price: 6800, subtotal: 13600 }
  ]);

  readonly saleDetails$ = this._state.asObservable();
  private get value(): SaleDetailI[] { return this._state.value; }

  getAll(): SaleDetailI[] { return this.value; }

  add(detail: Omit<SaleDetailI, 'id'>): SaleDetailI {
    const nextId = this.value.length ? Math.max(...this.value.map(d => d.id ?? 0)) + 1 : 1;
    const qty = Number(detail.quantity ?? 0);
    const price = Number(detail.price ?? 0);
    const newDetail: SaleDetailI = {
      id: nextId,
      saleId: Number(detail.saleId),
      medicationId: Number(detail.medicationId),
      quantity: qty,
      price,
      subtotal: +(qty * price).toFixed(2)
    };
    this._state.next([...this.value, newDetail]);
    return newDetail;
  }

  update(id: number, changes: Partial<Omit<SaleDetailI, 'id'>>): SaleDetailI | undefined {
    let found = false;
    const updated = this.value.map(d => {
      if (d.id === id) { found = true; return { ...d, ...changes, subtotal: +(Number(d.quantity) * Number(d.price)).toFixed(2) }; }
      return d;
    });
    if (found) this._state.next(updated);
    return updated.find(d => d.id === id);
  }

  delete(id: number): void {
    this._state.next(this.value.filter(d => d.id !== id));
  }

  getBySaleId(saleId: number): SaleDetailI[] {
    return this.value.filter(d => d.saleId === saleId);
  }

  reset(data: SaleDetailI[] = []): void {
    this._state.next(data);
  }
}
