import { Component, OnInit } from '@angular/core';
declare var require: any
const FileSaver = require('file-saver');
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  downloadPdf() {
    const pdfUrl = 'assets/2019 1040-SR Tax Return -  Elbert D and Lona K Vines.pdf';
    const pdfName = 'resume';
    FileSaver.saveAs(pdfUrl, pdfName);
    console.log("Downloaded file");
    console.log("Downloade");
  }

}
