import { Component, OnInit } from '@angular/core';
import { faLinkedin,faFacebook } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  Linkedlnicon=faLinkedin;
  Facebookicon=faFacebook;
  constructor() { }

  ngOnInit(): void {
  }

}
