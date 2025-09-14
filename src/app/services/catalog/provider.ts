import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProviderI } from '../../models/catalog/provider';

@Injectable({ providedIn: 'root' })
export class ProviderService {
  private readonly _state = new BehaviorSubject<ProviderI[]>([
    { id: 1, name: 'ACME Pharma', contactName: 'John Doe', phone: '+57 3001234567', email: 'sales@acme.com', address: 'Main St 123, Riohacha' },
    { id: 2, name: 'Global Med', contactName: 'Ana Ruiz', phone: '+57 3015557788', email: 'contact@globalmed.co', address: 'Cra 7 # 12-34, Valledupar' }
  ]);

  readonly providers$ = this._state.asObservable();
  private get value(): ProviderI[] { return this._state.value; }

  getProviders(): ProviderI[] {
    return this.value;
  }

  addProvider(provider: Omit<ProviderI, 'id'>): ProviderI {
    const nextId = this.value.length ? Math.max(...this.value.map(p => p.id ?? 0)) + 1 : 1;
    const newProvider: ProviderI = { id: nextId, ...provider };
    this._state.next([...this.value, newProvider]);
    return newProvider;
  }

  updateProvider(id: number, changes: Partial<Omit<ProviderI, 'id'>>): ProviderI | undefined {
    let found = false;
    const updated = this.value.map(p => {
      if (p.id === id) { found = true; return { ...p, ...changes }; }
      return p;
    });
    if (found) this._state.next(updated);
    return updated.find(p => p.id === id);
  }

  deleteProvider(id: number): void {
    this._state.next(this.value.filter(p => p.id !== id));
  }

  reset(data: ProviderI[] = []): void {
    this._state.next(data);
  }
}
