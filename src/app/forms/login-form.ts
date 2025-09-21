import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export function createLoginrForm(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group(
        {
            userName:
            [
                '',
                [
                    Validators.required,
                    Validators.minLength(3)
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