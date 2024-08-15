import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { SPINNER, NgxUiLoaderService } from 'ngx-ui-loader';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private fb: FormBuilder,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[^0-9]*$/)]],
      email: ['', [Validators.required, Validators.email]],
      service: ['Select A Service', Validators.required],
      message: ['', Validators.required],
    });
  }
  sendEmail() {
    if (this.contactForm.invalid) {
      // Swal.fire({
      //   title: 'Error',
      //   text: 'Invalid Details!',
      //   icon: 'warning',
      // });
      this.contactForm.markAllAsTouched();
      return;
    } else {
      this.ngxService.startLoader('loader-01');
      emailjs
        .send(
          'service_ei8blie',
          'template_6mbzcxa',
          this.contactForm.value,
          'bkcRq_ireBK7U1gGY'
        )
        .then(
          (result: EmailJSResponseStatus) => {
            this.ngxService.stopLoader('loader-01');
            Swal.fire({
              title: result.text,
              text: 'Your message has been sent successfully! We will Contact You Soon',
              icon: 'success',
            });
            this.contactForm.reset();
          },
          (error) => {
            this.ngxService.stopLoader('loader-01');
            Swal.fire({
              title: error.text,
              text: 'There was an error sending your message.!',
              icon: 'warning',
            });
          }
        );
    }
  }
  navigateToSection(section: string): void {
    this.router
      .navigate([], { fragment: section, relativeTo: this.route })
      .then(() => {
        this.viewportScroller.scrollToAnchor(section);
      });
  }
}
