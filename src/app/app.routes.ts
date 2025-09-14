import { Routes } from '@angular/router';
// Medications
import { ShowMedications } from './components/catalog/medications/show-medications/show-medications';
import { CreateMedications } from './components/catalog/medications/create-medications/create-medications';
import { UpdateMedications } from './components/catalog/medications/update-medications/update-medications';

// Categories
import { ShowCategories } from './components/catalog/categories/show-categories/show-categories';
import { CreateCategories } from './components/catalog/categories/create-categories/create-categories';
import { UpdateCategories } from './components/catalog/categories/update-categories/update-categories';

// Lots
import { ShowLots } from './components/catalog/lots/show-lots/show-lots';
import { CreateLots } from './components/catalog/lots/create-lots/create-lots';
import { UpdateLots } from './components/catalog/lots/update-lots/update-lots';

// Providers
import { ShowProviders } from './components/catalog/providerss/show-providers/show-providers';
import { CreateProviders } from './components/catalog/providerss/create-providers/create-providers';
import { UpdateProviders } from './components/catalog/providerss/update-providers/update-providers';

// Customers
import { ShowCustomers } from './components/customers/list/show-customers/show-customers';
import { CreateCustomers } from './components/customers/list/create-customers/create-customers';
import { UpdateCustomers } from './components/customers/list/update-customers/update-customers';

// Recipes
import { ShowRecipes } from './components/customers/recipes/show-recipes/show-recipes';
import { CreateRecipes } from './components/customers/recipes/create-recipes/create-recipes';
import { UpdateRecipes } from './components/customers/recipes/update-recipes/update-recipes';

// Sales
import { ShowSales } from './components/sales/new/show-sales/show-sales';
import { CreateSales } from './components/sales/new/create-sales/create-sales';
import { UpdateSales } from './components/sales/new/update-sales/update-sales';

// Sales Detail
import { ShowSalesDetail } from './components/sales/detail/show-sales-detail/show-sales-detail';
import { CreateSalesDetail } from './components/sales/detail/create-sales-detail/create-sales-detail';
import { UpdateSalesDetail } from './components/sales/detail/update-sales-detail/update-sales-detail';

// Payments
import { ShowPayments } from './components/payments/show-payments/show-payments';
import { CreatePayments } from './components/payments/create-payments/create-payments';
import { UpdatePayments } from './components/payments/update-payments/update-payments';

// Taxes
import { ShowTaxes } from './components/taxes/show-taxes/show-taxes';
import { CreateTaxes } from './components/taxes/create-taxes/create-taxes';
import { UpdateTaxes } from './components/taxes/update-taxes/update-taxes';

// Inventory Reports
import { ShowInventory } from './components/reports/inventory/show-inventory/show-inventory';
import { CreateInventory } from './components/reports/inventory/create-inventory/create-inventory';
import { UpdateInventory } from './components/reports/inventory/update-inventory/update-inventory';

// Expirations Reports
import { ShowExpirations } from './components/reports/expirations/show-expirations/show-expirations';
import { CreateExpirations } from './components/reports/expirations/create-expirations/create-expirations';
import { UpdateExpirations } from './components/reports/expirations/update-expirations/update-expirations';

// Sales Summary Reports
import { ShowSalesSummary } from './components/reports/salesSummary/show-sales-summary/show-sales-summary';
import { CreateSalesSummary } from './components/reports/salesSummary/create-sales-summary/create-sales-summary';
import { UpdateSalesSummary } from './components/reports/salesSummary/update-sales-summary/update-sales-summary';

export const routes: Routes = [
  { path: '', redirectTo: 'medications', pathMatch: 'full' },

  // Medications
  { path: 'medications', component: ShowMedications },
  { path: 'medications/create', component: CreateMedications },
  { path: 'medications/update', component: UpdateMedications },

  // Categories
  { path: 'categories', component: ShowCategories },
  { path: 'categories/create', component: CreateCategories },
  { path: 'categories/update', component: UpdateCategories },

  // Lots
  { path: 'lots', component: ShowLots },
  { path: 'lots/create', component: CreateLots },
  { path: 'lots/update', component: UpdateLots },

  // Providers
  { path: 'providers', component: ShowProviders },
  { path: 'providers/create', component: CreateProviders },
  { path: 'providers/update', component: UpdateProviders },

  // Customers
  { path: 'customers', component: ShowCustomers },
  { path: 'customers/create', component: CreateCustomers },
  { path: 'customers/update', component: UpdateCustomers },

  // Recipes
  { path: 'recipes', component: ShowRecipes },
  { path: 'recipes/create', component: CreateRecipes },
  { path: 'recipes/update', component: UpdateRecipes },

  // Sales
  { path: 'sales', component: ShowSales },
  { path: 'sales/create', component: CreateSales },
  { path: 'sales/update', component: UpdateSales },

  // Sales Detail
  { path: 'sales-detail', component: ShowSalesDetail },
  { path: 'sales-detail/create', component: CreateSalesDetail },
  { path: 'sales-detail/update', component: UpdateSalesDetail },

  // Payments
  { path: 'payments', component: ShowPayments },
  { path: 'payments/create', component: CreatePayments },
  { path: 'payments/update', component: UpdatePayments },

  // Taxes
  { path: 'taxes', component: ShowTaxes },
  { path: 'taxes/create', component: CreateTaxes },
  { path: 'taxes/update', component: UpdateTaxes },

  // Inventory Reports
  { path: 'inventory', component: ShowInventory },
  { path: 'inventory/create', component: CreateInventory },
  { path: 'inventory/update', component: UpdateInventory },

  // Expirations Reports
  { path: 'expirations', component: ShowExpirations },
  { path: 'expirations/create', component: CreateExpirations },
  { path: 'expirations/update', component: UpdateExpirations },

  // Sales Summary Reports
  { path: 'sales-summary', component: ShowSalesSummary },
  { path: 'sales-summary/create', component: CreateSalesSummary },
  { path: 'sales-summary/update', component: UpdateSalesSummary },

  // Fallback
  { path: '**', redirectTo: 'medications' }
];
