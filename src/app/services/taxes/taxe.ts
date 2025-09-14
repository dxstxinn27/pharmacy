import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaxI } from '../../models/taxes/sale'; // <- tu modelo está en taxes/sale.ts

@Injectable({ providedIn: 'root' })
export class TaxService {
  private readonly _state = new BehaviorSubject<TaxI[]>([
    { id: 1, name: 'VAT', percentage: 19, description: 'Value Added Tax' },
    { id: 2, name: 'Excise', percentage: 8, description: 'Special goods tax' }
  ]);

  readonly taxes$ = this._state.asObservable();
  private get value(): TaxI[] { return this._state.value; }

  getTaxes(): TaxI[] {
    return this.value;
  }

  addTax(tax: Omit<TaxI, 'id'>): TaxI {
    const nextId = this.value.length ? Math.max(...this.value.map(t => t.id ?? 0)) + 1 : 1;
    const newTax: TaxI = { id: nextId, ...tax };
    this._state.next([...this.value, newTax]);
    return newTax;
  }

  updateTax(id: number, changes: Partial<Omit<TaxI, 'id'>>): TaxI | undefined {
    let found = false;
    const updated = this.value.map(t => {
      if (t.id === id) { found = true; return { ...t, ...changes }; }
      return t;
    });
    if (found) this._state.next(updated);
    return updated.find(t => t.id === id);
  }

  deleteTax(id: number): void {
    this._state.next(this.value.filter(t => t.id !== id));
  }

  reset(data: TaxI[] = []): void {
    this._state.next(data);
  }
}
