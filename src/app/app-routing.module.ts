import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './layouts/components/sidenav/sidenav.component';
import { EmptyComponent } from './layouts/components/empty/empty.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'users',
      },
      {
        path: 'companies',
        loadChildren: () =>
          import('../app/modules/companies/companies.module').then((m) => m.CompaniesModule),
      },
      {
        path: 'users',
        loadChildren: () => import('../app/modules/users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'features',
        loadChildren: () =>
          import('../app/modules/features/features.module').then((m) => m.FeaturesModule),
      },
      {
        path: 'acceptance-criterias',
        loadChildren: () =>
          import('../app/modules/acceptance-criterias/acceptance-criterias.module').then(
            (m) => m.AcceptanceCriteriasModule,
          ),
      },
      {
        path: 'clients',
        loadChildren: () =>
          import('../app/modules/clients/clients.module').then((m) => m.ClientsModule),
      },
      {
        path: 'equipments',
        loadChildren: () =>
          import('../app/modules/equipments/equipments.module').then((m) => m.EquipmentsModule),
      },
      {
        path: 'operations',
        loadChildren: () =>
          import('../app/modules/operations/operations.module').then((m) => m.OperationsModule),
      },
      {
        path: 'perimeters',
        loadChildren: () =>
          import('../app/modules/perimeters/perimeters.module').then((m) => m.PerimetersModule),
      },
      {
        path: 'status',
        loadChildren: () =>
          import('../app/modules/status/status.module').then((m) => m.StatusModule),
      },
      {
        path: 'tests',
        loadChildren: () => import('../app/modules/tests/tests.module').then((m) => m.TestsModule),
      },
      {
        path: 'units',
        loadChildren: () => import('../app/modules/units/units.module').then((m) => m.UnitsModule),
      },
    ],
  },
  {
    path: '',
    component: EmptyComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
