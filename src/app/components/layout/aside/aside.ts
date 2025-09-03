import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [PanelMenu, PanelMenuModule],
  templateUrl: './aside.html',
  styleUrl: './aside.css'
})
export class Aside implements OnInit {
  menuItems: MenuItem[] | undefined;

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Catálogo',
        icon: 'pi pi-book',
        items: [
          {
            label: 'Medicamentos',
            icon: 'pi pi-medkit',
            items: [
              { label: 'Ver', icon: 'pi pi-eye', routerLink: '/medications/show' },
              { label: 'Actualizar', icon: 'pi pi-refresh', routerLink: '/medications/update' },
              { label: 'Crear', icon: 'pi pi-plus', routerLink: '/medications/create' }
            ]
          },
          {
            label: 'Categorías',
            icon: 'pi pi-tags',
            items: [
              { label: 'Ver', icon: 'pi pi-eye', routerLink: '/categories/show' },
              { label: 'Actualizar', icon: 'pi pi-refresh', routerLink: '/categories/update' },
              { label: 'Crear', icon: 'pi pi-plus', routerLink: '/categories/create' }
            ]
          },
          {
            label: 'Lotes',
            icon: 'pi pi-box',
            items: [
              { label: 'Ver', icon: 'pi pi-eye', routerLink: '/lots/show' },
              { label: 'Actualizar', icon: 'pi pi-refresh', routerLink: '/lots/update' },
              { label: 'Crear', icon: 'pi pi-plus', routerLink: '/lots/create' }
            ]
          },
          {
            label: 'Proveedores',
            icon: 'pi pi-truck',
            items: [
              { label: 'Ver', icon: 'pi pi-eye', routerLink: '/providers/show' },
              { label: 'Actualizar', icon: 'pi pi-refresh', routerLink: '/providers/update' },
              { label: 'Crear', icon: 'pi pi-plus', routerLink: '/providers/create' }
            ]
          }
        ]
      },
      {
        label: 'Clientes',
        icon: 'pi pi-users',
        items: [
          {
            label: 'Listado de Clientes',
            icon: 'pi pi-user',
            items: [
              { label: 'Ver', icon: 'pi pi-eye', routerLink: '/customers/show' },
              { label: 'Actualizar', icon: 'pi pi-refresh', routerLink: '/customers/update' },
              { label: 'Crear', icon: 'pi pi-plus', routerLink: '/customers/create' }
            ]
          },
          {
            label: 'Recetas',
            icon: 'pi pi-file',
            items: [
              { label: 'Ver', icon: 'pi pi-eye', routerLink: '/recipes/show' },
              { label: 'Actualizar', icon: 'pi pi-refresh', routerLink: '/recipes/update' },
              { label: 'Crear', icon: 'pi pi-plus', routerLink: '/recipes/create' }
            ]
          }
        ]
      },
      {
        label: 'Ventas',
        icon: 'pi pi-shopping-cart',
        items: [
          {
            label: 'Nueva Venta',
            icon: 'pi pi-plus-circle',
            items: [
              { label: 'Ver', icon: 'pi pi-eye', routerLink: '/sales/show' },
              { label: 'Actualizar', icon: 'pi pi-refresh', routerLink: '/sales/update' },
              { label: 'Crear', icon: 'pi pi-plus', routerLink: '/sales/create' }
            ]
          },
          {
            label: 'Detalle de Ventas',
            icon: 'pi pi-list',
            items: [
              { label: 'Ver', icon: 'pi pi-eye', routerLink: '/sales-detail/show' },
              { label: 'Actualizar', icon: 'pi pi-refresh', routerLink: '/sales-detail/update' },
              { label: 'Crear', icon: 'pi pi-plus', routerLink: '/sales-detail/create' }
            ]
          }
        ]
      },
      {
        label: 'Pagos e Impuestos',
        icon: 'pi pi-wallet',
        items: [
          {
            label: 'Pagos',
            icon: 'pi pi-credit-card',
            items: [
              { label: 'Ver', icon: 'pi pi-eye', routerLink: '/payments/show' },
              { label: 'Actualizar', icon: 'pi pi-refresh', routerLink: '/payments/update' },
              { label: 'Crear', icon: 'pi pi-plus', routerLink: '/payments/create' }
            ]
          },
          {
            label: 'Impuestos',
            icon: 'pi pi-percentage',
            items: [
              { label: 'Ver', icon: 'pi pi-eye', routerLink: '/taxes/show' },
              { label: 'Actualizar', icon: 'pi pi-refresh', routerLink: '/taxes/update' },
              { label: 'Crear', icon: 'pi pi-plus', routerLink: '/taxes/create' }
            ]
          }
        ]
      },
      {
        label: 'Reportes',
        icon: 'pi pi-chart-line',
        items: [
          {
            label: 'Inventario por Lotes',
            icon: 'pi pi-database',
            items: [
              { label: 'Ver', icon: 'pi pi-eye', routerLink: '/inventory/show' },
              { label: 'Actualizar', icon: 'pi pi-refresh', routerLink: '/inventory/update' },
              { label: 'Crear', icon: 'pi pi-plus', routerLink: '/inventory/create' }
            ]
          },
          {
            label: 'Vencimientos',
            icon: 'pi pi-calendar-times',
            items: [
              { label: 'Ver', icon: 'pi pi-eye', routerLink: '/expirations/show' },
              { label: 'Actualizar', icon: 'pi pi-refresh', routerLink: '/expirations/update' },
              { label: 'Crear', icon: 'pi pi-plus', routerLink: '/expirations/create' }
            ]
          },
          {
            label: 'Resumen de Ventas',
            icon: 'pi pi-receipt',
            items: [
              { label: 'Ver', icon: 'pi pi-eye', routerLink: '/sales-summary/show' },
              { label: 'Actualizar', icon: 'pi pi-refresh', routerLink: '/sales-summary/update' },
              { label: 'Crear', icon: 'pi pi-plus', routerLink: '/sales-summary/create' }
            ]
          }
        ]
      }
    ];
  }
}
