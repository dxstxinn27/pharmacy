// src/app/services/categories.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CategorieI } from '../../models/catalog/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  // Estado inicial de ejemplo
  private readonly _state = new BehaviorSubject<CategorieI[]>([
    { id: 1, name: 'Analgesics', description: 'Pain relievers' },
    { id: 2, name: 'Antibiotics', description: 'Treat bacterial infections' }
  ]);

  // Observable para suscribirse desde los componentes
  readonly categories$ = this._state.asObservable();

  // Getter rápido del valor actual
  private get value(): CategorieI[] {
    return this._state.value;
  }

  /** Retorna la lista actual (sin suscripción) */
  getCategories(): CategorieI[] {
    return this.value;
  }

  /** Agrega una categoría y autogenera el id */
  addCategory(category: Omit<CategorieI, 'id'>): CategorieI {
    const nextId = this.value.length
      ? Math.max(...this.value.map(c => c.id ?? 0)) + 1
      : 1;

    const newCategory: CategorieI = { id: nextId, ...category };
    this._state.next([...this.value, newCategory]);
    return newCategory;
  }

  /** Actualiza una categoría por id */
  updateCategory(id: number, changes: Partial<Omit<CategorieI, 'id'>>): CategorieI | undefined {
    let found = false;
    const updated = this.value.map(c => {
      if (c.id === id) {
        found = true;
        return { ...c, ...changes };
      }
      return c;
    });
    if (found) {
      this._state.next(updated);
      return updated.find(c => c.id === id);
    }
    return undefined;
  }

  /** Elimina una categoría por id */
  deleteCategory(id: number): void {
    this._state.next(this.value.filter(c => c.id !== id));
  }

  /** Reemplaza todo el estado (útil para cargar desde backend) */
  reset(data: CategorieI[] = []): void {
    this._state.next(data);
  }
}
