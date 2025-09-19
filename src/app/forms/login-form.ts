import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export function createLoginrForm(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group(
        {
            email:
            [
                '',
                [
                    Validators.required,
                    Validators.email,
                    Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$')
                ]
            ],
            password:
            [
                '',
                [
                    Validators.required,
                    Validators.minLength(6)
                ]
            ],
        }
    );
}