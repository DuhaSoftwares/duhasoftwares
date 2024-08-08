import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  contactForm!: FormGroup;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private fb: FormBuilder
  ) {}


  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      service: [null, Validators.required],
      message: ['', Validators.required]
    });
  }
   sendEmail() {
    if (this.contactForm.invalid) {
      Swal.fire({
        title: "Error",
        text: "Invalid Details!",
        icon: "warning"
      });
      return
    }
    emailjs.send('service_ei8blie', 'template_6mbzcxa',this.contactForm.value, 'bkcRq_ireBK7U1gGY')
      .then((result: EmailJSResponseStatus) => {
        Swal.fire({
          title: result.text,
          text: "Your message has been sent successfully! We will Contact You Soon",
          icon: "success"
        });
      }, (error) => {
        Swal.fire({
          title: error.text,
          text: "There was an error sending your message.!",
          icon: "warning"
        });
      });
  }

  navigateToSection(section: string): void {
    // Navigate to the specific section
    this.router.navigate([], { fragment: section, relativeTo: this.route }).then(() => {
      // Scroll to the fragment after navigation
      this.viewportScroller.scrollToAnchor(section);
    });
  }
}
