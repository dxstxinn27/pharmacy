import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CustomerI {
  id?: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  status: 'ACTIVE' | 'INACTIVE';
}

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private readonly _state = new BehaviorSubject<CustomerI[]>([
    {
      id: 1,
      firstName: 'Laura',
      lastName: 'Gomez',
      phone: '+57 3001234567',
      email: 'laura@example.com',
      address: 'Calle 10 #5-20',
      status: 'ACTIVE'
    },
    {
      id: 2,
      firstName: 'Carlos',
      lastName: 'Perez',
      phone: '+57 3015557788',
      email: 'carlos@example.com',
      address: 'Cra 7 #12-34',
      status: 'INACTIVE'
    }
  ]);

  readonly customers$ = this._state.asObservable();
  private get value(): CustomerI[] { return this._state.value; }

  getCustomers(): CustomerI[] {
    return this.value;
  }

  addCustomer(customer: Omit<CustomerI, 'id'>): CustomerI {
    const nextId = this.value.length ? Math.max(...this.value.map(c => c.id ?? 0)) + 1 : 1;
    const newCustomer: CustomerI = { id: nextId, ...customer };
    this._state.next([...this.value, newCustomer]);
    return newCustomer;
  }

  updateCustomer(id: number, changes: Partial<Omit<CustomerI, 'id'>>): CustomerI | undefined {
    let found = false;
    const updated = this.value.map(c => {
      if (c.id === id) { found = true; return { ...c, ...changes }; }
      return c;
    });
    if (found) this._state.next(updated);
    return updated.find(c => c.id === id);
  }

  deleteCustomer(id: number): void {
    this._state.next(this.value.filter(c => c.id !== id));
  }

  reset(data: CustomerI[] = []): void {
    this._state.next(data);
  }
}
