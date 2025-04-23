import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './feature/components/dashboard/dashboard.component';
import { LoginComponent } from './feature/components/login/login.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
