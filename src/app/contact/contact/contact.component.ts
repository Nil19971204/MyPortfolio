import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/service/about.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  data:any={
    "emailid": "asdfg@gmail.com",
    "message": "liomio",
    "name": " jio"
  };
  constructor(public service:AboutService) { }

  ngOnInit(): void {
  }
  onClickMe(){
    console.log("Hi",this.data);
    // this.service.get_data(this.data).subscribe((res)=>{
    //   console.log('data',res);
    //   //this.data = res;
    // });
    this.service.get_data(this.data).subscribe((res)=>{
      console.log(res);
      console.log("Downloaded file");
    });
    
  }
  

}
