import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GeocodingComponent} from './geocoding/geocoding.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {NominatimService} from './services/nominatim-service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MapComponent} from './map/map.component';
import {MapPointFormComponent} from './map-point-form/map-point-form.component';
import {ResultsListComponent} from './results-list/results-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    GeocodingComponent,
    MapComponent,
    MapPointFormComponent,
    ResultsListComponent,
    SignUpComponent,
    HeaderComponent,
    LeftPanelComponent,
    SignInComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    NominatimService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
