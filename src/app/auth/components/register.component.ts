import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { registerAction } from "../store/actions";

@Component({
	selector: 'bp-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit {
	form: FormGroup

	constructor(private fb: FormBuilder, private store: Store){}

   handleSubmit(): void {
		console.log("Submitted successfully", this.form.value)
		this.store.dispatch(registerAction(this.form.value))
	}
initializeForm():void{
}
	ngOnInit(): void {
		 this.initializeForm();
		 this.form = this.fb.group({
			 username: ['', Validators.required],
			 email: ['', Validators.required],
			 password: ['', Validators.required]
		 })
	}
}