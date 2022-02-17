import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";

import { RegisterComponent } from "./components/register.component";


const routes = [{
	path: 'register',
	component: RegisterComponent
}]

@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, StoreModule.forRoot([]), 
	StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    })],
	declarations: [RegisterComponent]
})

export class AuthModule {

}