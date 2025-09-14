import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

import { SalesSummaryService } from '../../../../services/reports/sales-summary';
import { SalesSummaryI } from '../../../../models/reports/sales-summary';

@Component({
  selector: 'app-show-sales-summary',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterModule],
  templateUrl: './show-sales-summary.html',
  styleUrl: './show-sales-summary.css',
  encapsulation: ViewEncapsulation.None
})
export class ShowSalesSummary {
  summaries: SalesSummaryI[] = [];

  constructor(private summaryService: SalesSummaryService) {
    this.summaryService.summaries$.subscribe(list => this.summaries = list);
  }
}
