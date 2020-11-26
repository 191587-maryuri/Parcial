import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Observable, Observer} from "rxjs";
import {Person} from "../../../../models/person";

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.sass'],
  providers: [Person]
})
export class SobreNosotrosComponent implements OnInit {

  constructor(private fb: FormBuilder, private persona:Person) {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required], [this.userNameAsyncValidator]],
      email: ['', [Validators.email, Validators.required]],
      comment: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  validateForm: FormGroup;

  submitForm(value: { userName: string; email: string; comment: string }): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    this.persona.nombre = value.userName;
    this.persona.correo = value.email;
    this.persona.mensaje = value.comment;

    localStorage.setItem("Persona",JSON.stringify(value));
    sessionStorage.setItem("Formulario",JSON.stringify(value));

    console.log(this.persona);
    console.log(sessionStorage.getItem("Formulario"));

  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === '') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });



}
