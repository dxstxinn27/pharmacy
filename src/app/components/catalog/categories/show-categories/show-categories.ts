import { Component, ViewEncapsulation } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { CategoriesService } from '../../../../services/catalog/categorie';
import { CategorieI } from '../../../../models/catalog/categorie';

@Component({
  selector: 'app-show-categories',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule, RouterModule],
  templateUrl: './show-categories.html',
  styleUrl: './show-categories.css',
  encapsulation: ViewEncapsulation.None
})
export class ShowCategories {
  categories: CategorieI[] = [];

  constructor(private categoriesService: CategoriesService) {
    this.categoriesService.categories$.subscribe(list => {
      this.categories = list;
    });
  }
}
