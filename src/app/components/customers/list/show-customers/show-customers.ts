import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { CustomerService, CustomerI } from '../../../../services/customers/customer';

@Component({
  selector: 'app-show-customers',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterModule],
  templateUrl: './show-customers.html',
  styleUrl: './show-customers.css',
  encapsulation: ViewEncapsulation.None
})
export class ShowCustomers {
  customers: CustomerI[] = [];

  constructor(private customerService: CustomerService) {
    this.customerService.customers$.subscribe(list => this.customers = list);
  }
}
