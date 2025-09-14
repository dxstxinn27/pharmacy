import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LotI } from '../../models/catalog/lot';

@Injectable({ providedIn: 'root' })
export class LotService {
  private readonly _state = new BehaviorSubject<LotI[]>([
    // Ejemplos (asegúrate de que existan esos medications)
    { id: 1, code: 'AMOX-2408-A', quantity: 200, manufactureDate: new Date('2024-08-10'), expirationDate: new Date('2026-08-10'), medicationId: 2 },
    { id: 2, code: 'IBU-2501-B',  quantity: 500, manufactureDate: new Date('2025-01-05'), expirationDate: new Date('2027-01-05'), medicationId: 1 }
  ]);

  readonly lots$ = this._state.asObservable();
  private get value(): LotI[] { return this._state.value; }

  getLots(): LotI[] {
    return this.value;
  }

  addLot(lot: Omit<LotI, 'id'>): LotI {
    const nextId = this.value.length ? Math.max(...this.value.map(l => l.id ?? 0)) + 1 : 1;
    const newLot: LotI = { id: nextId, ...lot };
    this._state.next([...this.value, newLot]);
    return newLot;
  }

  updateLot(id: number, changes: Partial<Omit<LotI, 'id'>>): LotI | undefined {
    let found = false;
    const updated = this.value.map(l => {
      if (l.id === id) { found = true; return { ...l, ...changes }; }
      return l;
    });
    if (found) this._state.next(updated);
    return updated.find(l => l.id === id);
  }

  deleteLot(id: number): void {
    this._state.next(this.value.filter(l => l.id !== id));
  }

  reset(data: LotI[] = []): void {
    this._state.next(data);
  }
}
