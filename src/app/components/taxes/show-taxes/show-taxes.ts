import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { TaxService } from '../../../services/taxes/taxe';
import { TaxI } from '../../../models/taxes/sale';

@Component({
  selector: 'app-show-taxes',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterModule],
  templateUrl: './show-taxes.html',
  styleUrl: './show-taxes.css',
  encapsulation: ViewEncapsulation.None
})
export class ShowTaxes {
  taxes: TaxI[] = [];

  constructor(private taxService: TaxService) {
    this.taxService.taxes$.subscribe(list => this.taxes = list);
  }
}
