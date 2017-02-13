import { Routes, RouterModule } from '@angular/router';
import { MetricsListComponent } from './metrics-list/metrics-list.component';
import { FormComponent } from './form/form.component';

const route: Routes = [
    { path: '', redirectTo: 'attribution', pathMatch: 'full' },
    { path: 'attribution', component: MetricsListComponent },
    { path: 'form', component: FormComponent }
]

export const routing = RouterModule.forRoot(route);