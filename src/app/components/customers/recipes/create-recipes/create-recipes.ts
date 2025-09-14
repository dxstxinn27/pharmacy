import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { RecipeService } from '../../../../services/customers/recipe';
import { CustomerService, CustomerI } from '../../../../services/customers/customer';
import { MedicationService } from '../../../../services/catalog/medication';
import { CategorieI } from '../../../../models/catalog/categorie';
import { MedicationI } from '../../../../models/catalog/medication';

@Component({
  selector: 'app-create-recipes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './create-recipes.html',
  styleUrl: './create-recipes.css'
})
export class CreateRecipes {
  form!: FormGroup;
  customers: CustomerI[] = [];
  medications: MedicationI[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private recipeService: RecipeService,
    private customerService: CustomerService,
    private medicationService: MedicationService
  ) {
    this.form = this.fb.group({
      customerId: [null, [Validators.required]],
      medicationId: [null, [Validators.required]],
      dosage: ['', [Validators.required, Validators.maxLength(40)]],
      frequency: ['', [Validators.required, Validators.maxLength(40)]],
      duration: ['', [Validators.required, Validators.maxLength(40)]]
    });

    this.customerService.customers$.subscribe(list => {
      // opcional: solo activos
      this.customers = list.filter(c => c.status === 'ACTIVE');
    });

    this.medicationService.medications$.subscribe(list => {
      this.medications = list; // podrías filtrar por stock > 0
    });
  }

  submit() {
    if (this.form.invalid) return;
    const v = this.form.value;
    this.recipeService.addRecipe({
      customerId: Number(v.customerId),
      medicationId: Number(v.medicationId),
      dosage: v.dosage ?? '',
      frequency: v.frequency ?? '',
      duration: v.duration ?? ''
    });
    this.router.navigate(['/recipes']);
  }

  cancel() {
    this.router.navigate(['/recipes']);
  }
}
