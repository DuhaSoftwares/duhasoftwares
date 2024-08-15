import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  signUpRequestForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ngxService: NgxUiLoaderService
  ) {}
  ngOnInit() {
    this.signUpRequestForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  requestSignUp() {
    if (this.signUpRequestForm.invalid) {
      this.signUpRequestForm.markAllAsTouched();
      return;
    } else {
      this.ngxService.startLoader('loader-02');
      emailjs
        .send(
          'service_ei8blie',
          'template_744gfz9',
          this.signUpRequestForm.value,
          'bkcRq_ireBK7U1gGY'
        )
        .then(
          (result: EmailJSResponseStatus) => {
            this.ngxService.stopLoader('loader-02');
            Swal.fire({
              title: result.text,
              text: 'Your Sign-Up request  has been sent successfully! We will Contact You Soon',
              icon: 'success',
            });
            this.signUpRequestForm.reset();
          },
          (error) => {
            this.ngxService.stopLoader('loader-02');
            Swal.fire({
              title: error.text,
              text: 'There was an error sending your Request.!',
              icon: 'warning',
            });
          }
        );
    }
  }
}
