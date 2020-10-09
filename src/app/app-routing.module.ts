import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapComponent} from './map/map.component'
import {SignUpComponent} from './sign-up/sign-up.component'


const routes: Routes = [
  {path: '', component: MapComponent},
  {path: 'sign-up', component: SignUpComponent},]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
