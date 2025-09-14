import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { MedicationService } from '../../../../services/catalog/medication';
import { CategoriesService } from '../../../../services/catalog/categorie';
import { ProviderService } from '../../../../services/catalog/provider';

import { CategorieI } from '../../../../models/catalog/categorie';
import { ProviderI } from '../../../../models/catalog/provider';

@Component({
  selector: 'app-create-medications',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './create-medications.html',
  styleUrl: './create-medications.css'
})
export class CreateMedications {
  form!: FormGroup;
  categories: CategorieI[] = [];
  providers: ProviderI[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private medicationService: MedicationService,
    private categoriesService: CategoriesService,
    private providerService: ProviderService
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      description: ['', [Validators.maxLength(200)]],
      price: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(0), Validators.pattern(/^\d+$/)]],
      categoryId: [null, [Validators.required]],
      providerId: [null, [Validators.required]]
    });

    this.categoriesService.categories$.subscribe(list => this.categories = list);
    this.providerService.providers$.subscribe(list => this.providers = list);
  }

  submit() {
    if (this.form.invalid) return;
    const v = this.form.value;
    this.medicationService.addMedication({
      name: v.name ?? '',
      description: v.description ?? '',
      price: Number(v.price ?? 0),
      stock: Number(v.stock ?? 0),
      categoryId: Number(v.categoryId),
      providerId: Number(v.providerId)
    });
    this.router.navigate(['/medications']);
  }

  cancel() {
    this.router.navigate(['/medications']);
  }
}
