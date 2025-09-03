import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

import { DrawerModule } from 'primeng/drawer';
import { Drawer } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { StyleClass } from 'primeng/styleclass';

// Ajusta la ruta si tu Aside está en otro lugar
import { Aside } from '../aside/aside';

interface NavItem {
  label: string;       // visible en español
  routerLink: string;  // rutas en inglés
  styleClass: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgFor, DrawerModule, ButtonModule, Aside],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @ViewChild('drawerRef') drawerRef!: Drawer;

  drawerVisible = false;

  navItems: NavItem[] = [
    { label: 'Inicio',          routerLink: '/',           styleClass: 'white-btn' },
    { label: 'Productos',       routerLink: '/products',   styleClass: 'white-btn' },
    { label: 'Nosotros',        routerLink: '/about',      styleClass: 'white-btn' },
    { label: 'Contacto',        routerLink: '/contact',    styleClass: 'white-btn' },
    { label: 'Iniciar sesión',  routerLink: '/login',      styleClass: 'cta-btn' }
  ];

  closeCallback(e: Event): void {
    this.drawerRef.close(e);
  }
}
