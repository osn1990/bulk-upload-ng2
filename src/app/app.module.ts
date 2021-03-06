// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DropdownModule } from 'ng2-bootstrap';
import { SelectModule } from 'ng2-select';
import { OrdermModule } from './orderm/orderm.module';

// used to create fake backend
import { fakeBackendProvider } from 'helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

// Router and Services
import { routing } from "./app.routing";
import { MetricService } from 'services/metric.service';
import { ProductService } from 'services/product.service';
import { BackendService } from 'services/backend.service';
import { LotDataService } from 'services/lot-data.service';
import { Logger } from 'services/logger.service';
import { AuthenticationService } from 'services/authentication.service';
import { AuthGuard } from 'services/auth-guard.service';
import { UserService } from 'services/user.service';

// Components
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MetricsListComponent } from './metrics-list/metrics-list.component';
import { LotRowComponent } from './lot-row/lot-row.component';
import { FormValidationComponent } from './form/form.component';
import { LotDetailsComponent } from './lot-details/lot-details.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MetricsListComponent,
    LotRowComponent,
    FormValidationComponent,
    LotDetailsComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    DropdownModule.forRoot(),
    SelectModule,
    OrdermModule
  ],
  providers: [
    BackendService,
    MetricService,
    ProductService,
    LotDataService,
    Logger,
    AuthenticationService,
    AuthGuard,
    UserService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
