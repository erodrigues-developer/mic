import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './auth/auth.guard'
import { LoginComponent } from './components/login/login.component'
import { AssociateComponent } from './components/mic/associate/associate.component'
import { FormAssociateComponent } from './components/mic/associate/form-associate/form-associate.component'
import { FormProviderComponent } from './components/mic/provider/form-provider/form-provider.component'
import { ProviderComponent } from './components/mic/provider/provider.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: 'associates', component: AssociateComponent, canActivate: [AuthGuard] },
  { path: 'associates/form', component: FormAssociateComponent, canActivate: [AuthGuard] },
  { path: 'associates/form/:id', component: FormAssociateComponent, canActivate: [AuthGuard] },
  { path: 'providers', component: ProviderComponent, canActivate: [AuthGuard] },
  { path: 'providers/form', component: FormProviderComponent, canActivate: [AuthGuard] },
  { path: 'providers/form/:id', component: FormProviderComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
