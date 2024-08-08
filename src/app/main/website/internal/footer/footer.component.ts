import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  signUpRequestForm!: FormGroup;

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.signUpRequestForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  requestSignUp() {
   
    if (this.signUpRequestForm.invalid) {
      Swal.fire({
        title: 'Error',
        text: "Enter Valid Email Id.!",
        icon: "warning"
      });
      return;
    }
    emailjs.send('service_ei8blie', 'template_744gfz9', this.signUpRequestForm.value, 'bkcRq_ireBK7U1gGY')
      .then((result: EmailJSResponseStatus) => {
        Swal.fire({
          title: result.text,
          text: "Your Sign-Up request  has been sent successfully! We will Contact You Soon",
          icon: "success"
        });
      }, (error) => {
        Swal.fire({
          title: error.text,
          text: "There was an error sending your Request.!",
          icon: "warning"
        });
      });
  }
}
