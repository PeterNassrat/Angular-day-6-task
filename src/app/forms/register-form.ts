import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { passwordMatchValidator } from "../validators/confirm-password";

export function createRegisterForm(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group(
        {
            fullName:
            [
                '',
                [
                    Validators.required,
                    Validators.minLength(5)
                ]
            ]
            ,
            email:
            [
                '',
                [
                    Validators.required,
                    Validators.email,
                    Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$')
                ]
            ]
            ,
            phoneNumber:
            [
                '',
                [
                    Validators.required,
                    Validators.pattern('^01[0125][0-9]{8}$')
                ]
            ]
            ,
            password:
            [
                '',
                [
                    Validators.required,
                    Validators.minLength(6)
                ]
            ],
            confirmPassword:
            [
                '',
                [
                    Validators.required,
                ]
            ],
        },
        {
            validators: passwordMatchValidator('password', 'confirmPassword')
        }
    );
}