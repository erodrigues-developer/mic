import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { NgxCurrencyModule } from "ngx-currency"
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MaterialModule } from './core/material.module'
import { LoginComponent } from './components/login/login.component'
import { NavComponent } from './components/nav/nav.component'
import { LayoutModule } from '@angular/cdk/layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { ChartsModule } from 'ng2-charts'
import { AssociateComponent } from './components/mic/associate/associate.component'
import { FormAssociateComponent } from './components/mic/associate/form-associate/form-associate.component'
import { FilterAssociateComponent } from './components/mic/associate/filter-associate/filter-associate.component'
import { ProviderComponent } from './components/mic/provider/provider.component'
import { FormProviderComponent } from './components/mic/provider/form-provider/form-provider.component'
import { FilterProviderComponent } from './components/mic/provider/filter-provider/filter-provider.component'
import { ErrorComponent } from './components/error/error.component'
import { DeleteComponent } from './components/delete/delete.component';
import { HomeComponent } from './home/home.component'
import { BaseComponent } from './components/base.component'

const maskConfig: Partial<IConfig> = {
  validation: false,
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    AssociateComponent,
    FormAssociateComponent,
    FilterAssociateComponent,
    ProviderComponent,
    FormProviderComponent,
    FilterProviderComponent,
    ErrorComponent,
    DeleteComponent,
    HomeComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    NgxMaskModule.forRoot(maskConfig),
    NgxCurrencyModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
