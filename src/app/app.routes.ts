import { Routes } from '@angular/router';

export const routes: Routes = [
  // Medications
  { path: 'medications/show', loadComponent: () =>
      import('./components/catalog/medications/show-medications/show-medications')
        .then(m => m.ShowMedications) },
  { path: 'medications/create', loadComponent: () =>
      import('./components/catalog/medications/create-medications/create-medications')
        .then(m => m.CreateMedications) },
  { path: 'medications/update', loadComponent: () =>
      import('./components/catalog/medications/update-medications/update-medications')
        .then(m => m.UpdateMedications) },

  // Categories
  { path: 'categories/show', loadComponent: () =>
      import('./components/catalog/categories/show-categories/show-categories')
        .then(m => m.ShowCategories) },
  { path: 'categories/create', loadComponent: () =>
      import('./components/catalog/categories/create-categories/create-categories')
        .then(m => m.CreateCategories) },
  { path: 'categories/update', loadComponent: () =>
      import('./components/catalog/categories/update-categories/update-categories')
        .then(m => m.UpdateCategories) },

  // Lots
  { path: 'lots/show', loadComponent: () =>
      import('./components/catalog/lots/show-lots/show-lots')
        .then(m => m.ShowLots) },
  { path: 'lots/create', loadComponent: () =>
      import('./components/catalog/lots/create-lots/create-lots')
        .then(m => m.CreateLots) },
  { path: 'lots/update', loadComponent: () =>
      import('./components/catalog/lots/update-lots/update-lots')
        .then(m => m.UpdateLots) },

  // Providers
  { path: 'providers/show', loadComponent: () =>
      import('./components/catalog/providers/show-providers/show-providers')
        .then(m => m.ShowProviders) },
  { path: 'providers/create', loadComponent: () =>
      import('./components/catalog/providers/create-providers/create-providers')
        .then(m => m.CreateProviders) },
  { path: 'providers/update', loadComponent: () =>
      import('./components/catalog/providers/update-providers/update-providers')
        .then(m => m.UpdateProviders) },

  // Customers
  { path: 'customers/show', loadComponent: () =>
      import('./components/customers/list/show-customers/show-customers')
        .then(m => m.ShowCustomers) },
  { path: 'customers/create', loadComponent: () =>
      import('./components/customers/list/create-customers/create-customers')
        .then(m => m.CreateCustomers) },
  { path: 'customers/update', loadComponent: () =>
      import('./components/customers/list/update-customers/update-customers')
        .then(m => m.UpdateCustomers) },

  // Recipes
  { path: 'recipes/show', loadComponent: () =>
      import('./components/customers/recipes/show-recipes/show-recipes')
        .then(m => m.ShowRecipes) },
  { path: 'recipes/create', loadComponent: () =>
      import('./components/customers/recipes/create-recipes/create-recipes')
        .then(m => m.CreateRecipes) },
  { path: 'recipes/update', loadComponent: () =>
      import('./components/customers/recipes/update-recipes/update-recipes')
        .then(m => m.UpdateRecipes) },

  // Sales
  { path: 'sales/show', loadComponent: () =>
      import('./components/sales/new/show-sales/show-sales')
        .then(m => m.ShowSales) },
  { path: 'sales/create', loadComponent: () =>
      import('./components/sales/new/create-sales/create-sales')
        .then(m => m.CreateSales) },
  { path: 'sales/update', loadComponent: () =>
      import('./components/sales/new/update-sales/update-sales')
        .then(m => m.UpdateSales) },

  // Sales Detail
  { path: 'sales-detail/show', loadComponent: () =>
      import('./components/sales/detail/show-sales-detail/show-sales-detail')
        .then(m => m.ShowSalesDetail) },
  { path: 'sales-detail/create', loadComponent: () =>
      import('./components/sales/detail/create-sales-detail/create-sales-detail')
        .then(m => m.CreateSalesDetail) },
  { path: 'sales-detail/update', loadComponent: () =>
      import('./components/sales/detail/update-sales-detail/update-sales-detail')
        .then(m => m.UpdateSalesDetail) },

  // Payments
  { path: 'payments/show', loadComponent: () =>
      import('./components/payments/show-payments/show-payments')
        .then(m => m.ShowPayments) },
  { path: 'payments/create', loadComponent: () =>
      import('./components/payments/create-payments/create-payments')
        .then(m => m.CreatePayments) },
  { path: 'payments/update', loadComponent: () =>
      import('./components/payments/update-payments/update-payments')
        .then(m => m.UpdatePayments) },

  // Taxes
  { path: 'taxes/show', loadComponent: () =>
      import('./components/taxes/show-taxes/show-taxes')
        .then(m => m.ShowTaxes) },
  { path: 'taxes/create', loadComponent: () =>
      import('./components/taxes/create-taxes/create-taxes')
        .then(m => m.CreateTaxes) },
  { path: 'taxes/update', loadComponent: () =>
      import('./components/taxes/update-taxes/update-taxes')
        .then(m => m.UpdateTaxes) },

  // Inventory Reports
  { path: 'inventory/show', loadComponent: () =>
      import('./components/reports/inventory/show-inventory/show-inventory')
        .then(m => m.ShowInventory) },
  { path: 'inventory/create', loadComponent: () =>
      import('./components/reports/inventory/create-inventory/create-inventory')
        .then(m => m.CreateInventory) },
  { path: 'inventory/update', loadComponent: () =>
      import('./components/reports/inventory/update-inventory/update-inventory')
        .then(m => m.UpdateInventory) },

  // Expirations Reports
  { path: 'expirations/show', loadComponent: () =>
      import('./components/reports/expirations/show-expirations/show-expirations')
        .then(m => m.ShowExpirations) },
  { path: 'expirations/create', loadComponent: () =>
      import('./components/reports/expirations/create-expirations/create-expirations')
        .then(m => m.CreateExpirations) },
  { path: 'expirations/update', loadComponent: () =>
      import('./components/reports/expirations/update-expirations/update-expirations')
        .then(m => m.UpdateExpirations) },

  // Sales Summary Reports
  { path: 'sales-summary/show', loadComponent: () =>
      import('./components/reports/salesSummary/show-sales-summary/show-sales-summary')
        .then(m => m.ShowSalesSummary) },
  { path: 'sales-summary/create', loadComponent: () =>
      import('./components/reports/salesSummary/create-sales-summary/create-sales-summary')
        .then(m => m.CreateSalesSummary) },
  { path: 'sales-summary/update', loadComponent: () =>
      import('./components/reports/salesSummary/update-sales-summary/update-sales-summary')
        .then(m => m.UpdateSalesSummary) },

  // Fallback
  { path: '**', redirectTo: 'medications/show' }
];
