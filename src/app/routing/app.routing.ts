import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }   from './../components/home/home.component';

const appRoutes: Routes = [
    {
        path: "welcome",
        loadChildren : 'app/modules/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: "full"
    },
    {
        path: '**',
        redirectTo: 'welcome',
        pathMatch: 'full'
    }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);

const DashboardRoute: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

export const DashboardRoutingModule: ModuleWithProviders = RouterModule.forChild(DashboardRoute);

