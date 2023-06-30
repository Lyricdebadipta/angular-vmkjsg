import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css'],
})
export class Exercise1Component implements OnInit {
  registerForm!: FormGroup<{
    firstName: FormControl<string | null>;
    password: FormControl<string | null>;
    email: FormControl<string | null>;
  }>;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.customPasswordValidator()]],
    });
  }
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    alert(
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4)
    );
  }

  customPasswordValidator(): ValidatorFn {
    console.log('validatoor  called ');
    return (control: AbstractControl): ValidationErrors | null => {
      const al = control.value;

      const regex =
        /^(?=[a-zA-Z0-9#@$?]{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).*/;

      const isValid = regex.test(al);

      console.log('dasdadsad', al, isValid);
      return { password: isValid };
    };
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
