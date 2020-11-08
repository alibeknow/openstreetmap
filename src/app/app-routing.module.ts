import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapComponent} from './map/map.component'
import {SignUpComponent} from './sign-up/sign-up.component'
import { SignInComponent } from './sign-in/sign-in.component'
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: '', component: MapComponent, canActivate: [AuthGuard]},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
