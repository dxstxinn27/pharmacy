import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PaymentI } from '../../models/payments/payment';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  private readonly _state = new BehaviorSubject<PaymentI[]>([
    // ejemplos
    { id: 1, saleId: 1, amount: 20000, paymentDate: new Date(), method: 'card' }
  ]);

  readonly payments$ = this._state.asObservable();
  private get value(): PaymentI[] { return this._state.value; }

  getPayments(): PaymentI[] { return this.value; }

  getBySaleId(saleId: number): PaymentI[] {
    return this.value.filter(p => p.saleId === saleId);
  }

  addPayment(p: Omit<PaymentI, 'id'>): PaymentI {
    const nextId = this.value.length ? Math.max(...this.value.map(x => x.id ?? 0)) + 1 : 1;
    const newP: PaymentI = { id: nextId, ...p };
    this._state.next([...this.value, newP]);
    return newP;
  }

  deletePayment(id: number): void {
    this._state.next(this.value.filter(p => p.id !== id));
  }

  reset(data: PaymentI[] = []): void {
    this._state.next(data);
  }
}
