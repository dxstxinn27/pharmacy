import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface RecipeI {
  id?: number;
  customerId: number;
  medicationId: number;
  dosage: string;     // ej: "500 mg"
  frequency: string;  // ej: "every 8h"
  duration: string;   // ej: "7 days"
}

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private readonly _state = new BehaviorSubject<RecipeI[]>([
    // Ejemplo inicial (asegúrate de que existan esos IDs)
    { id: 1, customerId: 1, medicationId: 1, dosage: '400 mg', frequency: 'every 8h', duration: '5 days' }
  ]);

  readonly recipes$ = this._state.asObservable();
  private get value(): RecipeI[] { return this._state.value; }

  getRecipes(): RecipeI[] {
    return this.value;
  }

  addRecipe(rec: Omit<RecipeI, 'id'>): RecipeI {
    const nextId = this.value.length ? Math.max(...this.value.map(r => r.id ?? 0)) + 1 : 1;
    const newRec: RecipeI = { id: nextId, ...rec };
    this._state.next([...this.value, newRec]);
    return newRec;
  }

  updateRecipe(id: number, changes: Partial<Omit<RecipeI, 'id'>>): RecipeI | undefined {
    let found = false;
    const updated = this.value.map(r => {
      if (r.id === id) { found = true; return { ...r, ...changes }; }
      return r;
    });
    if (found) this._state.next(updated);
    return updated.find(r => r.id === id);
  }

  deleteRecipe(id: number): void {
    this._state.next(this.value.filter(r => r.id !== id));
  }

  reset(data: RecipeI[] = []): void {
    this._state.next(data);
  }
}
