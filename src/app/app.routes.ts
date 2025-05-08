import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './feature/components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './core/components/layout/layout.component';
import { authGuard } from './core/services/AuthService/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './feature/components/login/components/login.component';

export const routes: Routes = [

    {
        path: 'login',
        // loadChildren: () => import('./feature/components/login/login.module').then(m => m.LoginModule)
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: '',
                // loadChildren: () => import('./feature/components/dashboard').then
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
