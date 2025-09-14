import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ExpirationI } from '../../models/reports/expiration';

@Injectable({ providedIn: 'root' })
export class ExpirationsService {
  private readonly _state = new BehaviorSubject<ExpirationI[]>([
    // Ejemplo (ajusta IDs existentes)
    // { id: 1, medicationId: 1, lotId: 2, expirationDate: new Date('2026-08-10'), quantity: 50 }
  ]);

  readonly expirations$ = this._state.asObservable();
  private get value(): ExpirationI[] { return this._state.value; }

  getAll(): ExpirationI[] { return this.value; }

  add(exp: Omit<ExpirationI, 'id'>): ExpirationI {
    const nextId = this.value.length ? Math.max(...this.value.map(e => e.id ?? 0)) + 1 : 1;
    const created: ExpirationI = {
      id: nextId,
      medicationId: Number(exp.medicationId),
      lotId: Number(exp.lotId),
      expirationDate: new Date(exp.expirationDate),
      quantity: Number(exp.quantity ?? 0)
    };
    this._state.next([...this.value, created]);
    return created;
  }

  delete(id: number): void {
    this._state.next(this.value.filter(e => e.id !== id));
  }

  reset(data: ExpirationI[] = []): void {
    this._state.next(data);
  }

  getByMedicationId(medicationId: number): ExpirationI[] {
    return this.value.filter(e => e.medicationId === medicationId);
  }

  getByLotId(lotId: number): ExpirationI[] {
    return this.value.filter(e => e.lotId === lotId);
  }
}
