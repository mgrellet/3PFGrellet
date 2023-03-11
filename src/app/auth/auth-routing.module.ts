import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationComponent} from "./components/authentication/authentication.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {
    path: '', component: AuthenticationComponent, children: [
      {
        path: 'login', component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
