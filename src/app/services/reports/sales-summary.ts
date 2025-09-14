import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SalesSummaryI } from '../../models/reports/sales-summary';
import { SaleService } from '../../services/sales/sale';
import { SaleI } from '../../models/sales/new';

@Injectable({ providedIn: 'root' })
export class SalesSummaryService {
  private readonly _state = new BehaviorSubject<SalesSummaryI[]>([]);
  readonly summaries$ = this._state.asObservable();
  private get value(): SalesSummaryI[] { return this._state.value; }

  constructor(private saleService: SaleService) {}

  getAll(): SalesSummaryI[] { return this.value; }

  /** Genera y guarda un resumen a partir de las ventas en el rango [start, end] (inclusive) */
  createFromRange(startDate: Date, endDate: Date, includeSales = true): SalesSummaryI {
    // Normalizamos a límites del día
    const start = new Date(startDate);
    start.setHours(0, 0, 0, 0);
    const end = new Date(endDate);
    end.setHours(23, 59, 59, 999);

    const allSales: SaleI[] = this.saleService.getSales();
    const inRange = allSales.filter(s => {
      const d = new Date(s.saleDate);
      return d >= start && d <= end;
    });

    const totalSales = inRange.length;
    const totalAmount = +inRange.reduce((acc, s) => acc + (s.totalAmount ?? 0), 0).toFixed(2);

    const nextId = this.value.length ? Math.max(...this.value.map(x => x.id ?? 0)) + 1 : 1;
    const summary: SalesSummaryI = {
      id: nextId,
      totalSales,
      totalAmount,
      startDate: start,
      endDate: end,
      sales: includeSales ? inRange : undefined
    };

    this._state.next([...this.value, summary]);
    return summary;
  }

  delete(id: number): void {
    this._state.next(this.value.filter(s => s.id !== id));
  }

  reset(data: SalesSummaryI[] = []): void {
    this._state.next(data);
  }
}
