import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup} from "@angular/forms";
import  { PageServiceService } from "../page-service.service";
@Component({
  selector: 'ngx-createschool',
  templateUrl: './createschool.component.html',
  styleUrls: ['./createschool.component.scss']
})
export class CreateschoolComponent implements OnInit {
  school_form: any;

  constructor(private page_service:PageServiceService) {
    const school_name = new FormControl('', Validators.required);
    this.school_form = new FormGroup({
      school_name: school_name
    });
  }

  ngOnInit() {

  }
  createSchool(){
    this.page_service.createSchool(this.school_form.value).subscribe(response => {
      console.log(response);
    })
  }
}
