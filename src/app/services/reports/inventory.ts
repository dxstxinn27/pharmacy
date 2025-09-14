import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InventoryI } from '../../models/reports/inventory';

@Injectable({ providedIn: 'root' })
export class InventoryService {
  private readonly _state = new BehaviorSubject<InventoryI[]>([
    // Ejemplo inicial
    { id: 1, medicationId: 1, currentStock: 120, minimumStock: 20 }
  ]);

  readonly inventories$ = this._state.asObservable();
  private get value(): InventoryI[] { return this._state.value; }

  getAll(): InventoryI[] { return this.value; }

  /** Agrega un registro; si ya existe para ese medicationId, lo actualiza */
  upsert(inv: Omit<InventoryI, 'id'>): InventoryI {
    const existing = this.value.find(x => x.medicationId === inv.medicationId);
    if (existing) {
      const updated: InventoryI = { ...existing, ...inv, id: existing.id };
      this._state.next(this.value.map(x => x.id === existing.id ? updated : x));
      return updated;
    }
    const nextId = this.value.length ? Math.max(...this.value.map(x => x.id ?? 0)) + 1 : 1;
    const created: InventoryI = { id: nextId, ...inv };
    this._state.next([...this.value, created]);
    return created;
  }

  update(id: number, changes: Partial<Omit<InventoryI, 'id' | 'medicationId'>>): InventoryI | undefined {
    let found = false;
    const updated = this.value.map(r => {
      if (r.id === id) { found = true; return { ...r, ...changes }; }
      return r;
    });
    if (found) this._state.next(updated);
    return updated.find(r => r.id === id);
  }

  delete(id: number): void {
    this._state.next(this.value.filter(r => r.id !== id));
  }

  reset(data: InventoryI[] = []): void {
    this._state.next(data);
  }
}
