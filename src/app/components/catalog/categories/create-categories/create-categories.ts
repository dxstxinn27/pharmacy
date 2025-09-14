import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CategoriesService } from '../../../../services/catalog/categorie';

@Component({
  selector: 'app-create-categories',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './create-categories.html',
  styleUrl: './create-categories.css'
})
export class CreateCategories {
  form!: FormGroup;  // <- solo declaras aquí

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private categoriesService: CategoriesService
  ) {
    // <- y lo inicializas aquí (ya existe this.fb)
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
      description: ['', [Validators.maxLength(200)]]
    });
  }

  submit() {
    if (this.form.invalid) return;
    const { name, description } = this.form.value;
    this.categoriesService.addCategory({
      name: name ?? '',
      description: description ?? ''
    });
    this.router.navigate(['/categories']);
  }

  cancel() {
    this.router.navigate(['/categories']);
  }
}
