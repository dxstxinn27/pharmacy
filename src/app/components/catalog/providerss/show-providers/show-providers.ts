import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { ProviderService } from '../../../../services/catalog/provider';
import { ProviderI } from '../../../../models/catalog/provider';

@Component({
  selector: 'app-show-providers',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterModule],
  templateUrl: './show-providers.html',
  styleUrl: './show-providers.css',
  encapsulation: ViewEncapsulation.None
})
export class ShowProviders {
  providers: ProviderI[] = [];

  constructor(private providerService: ProviderService) {
    this.providerService.providers$.subscribe(list => this.providers = list);
  }
}
