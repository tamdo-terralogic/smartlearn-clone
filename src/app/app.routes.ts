import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './feature/components/dashboard/dashboard.component';
import { LoginComponent } from './feature/components/login/login.component';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './core/components/layout/layout.component';
import { authGuard } from './core/services/AuthService/auth.guard';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [

    {
        path: 'login',
        // loadChildren: () => import('./feature/components/login').then
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
        ]

    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
