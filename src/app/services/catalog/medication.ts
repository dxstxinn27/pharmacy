import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MedicationI } from '../../models/catalog/medication';

@Injectable({ providedIn: 'root' })
export class MedicationService {
  private readonly _state = new BehaviorSubject<MedicationI[]>([
    // datos de ejemplo (asegúrate de que categoryId y providerId existan)
    { id: 1, name: 'Ibuprofen 400mg', description: 'Tablets', price: 6800, stock: 120, categoryId: 1, providerId: 1 },
    { id: 2, name: 'Amoxicillin 500mg', description: 'Capsules', price: 12500, stock: 80, categoryId: 2, providerId: 2 }
  ]);

  readonly medications$ = this._state.asObservable();
  private get value(): MedicationI[] { return this._state.value; }

  getMedications(): MedicationI[] {
    return this.value;
  }

  addMedication(med: Omit<MedicationI, 'id'>): MedicationI {
    const nextId = this.value.length ? Math.max(...this.value.map(m => m.id ?? 0)) + 1 : 1;
    const newMed: MedicationI = { id: nextId, ...med };
    this._state.next([...this.value, newMed]);
    return newMed;
  }

  updateMedication(id: number, changes: Partial<Omit<MedicationI, 'id'>>): MedicationI | undefined {
    let found = false;
    const updated = this.value.map(m => {
      if (m.id === id) { found = true; return { ...m, ...changes }; }
      return m;
    });
    if (found) this._state.next(updated);
    return updated.find(m => m.id === id);
  }

  deleteMedication(id: number): void {
    this._state.next(this.value.filter(m => m.id !== id));
  }

  reset(data: MedicationI[] = []): void {
    this._state.next(data);
  }
}
