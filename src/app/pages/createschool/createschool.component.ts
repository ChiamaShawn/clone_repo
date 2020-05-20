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
  schools: any;
  counties:any;
  settings = {
    mode: external,
    actions: {
      add:false,
      edit:false,
      delete:false,
    },

    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      school_name: {
        title: 'School Name',
        type: 'string',
      },
      school_code: {
        title: 'School Code',
        type: 'string',
      }



    },
  };
  constructor(private page_service:PageServiceService) {
    const school_name = new FormControl('', Validators.required);
    const county_id = new FormControl('', Validators.required);
    this.school_form = new FormGroup({
      school_name: school_name,
      county_id: county_id
    });


  }

  ngOnInit() {
    this.getSchools();
    this.getCounties();
  }

  getSchools(){
    this.page_service.getSchools().subscribe(response =>{
      console.log(response);
      this.schools = response;
    })
  }
  getCounties(){
    this.page_service.getCounties().subscribe(response => {
      console.log(response);
      this.counties = response;

    })
  }
  onClick(){
    this.page_service.createSchool(this.school_form.value).subscribe(response => {
      console.log(response);
      this.getSchools();
    })
  }
}
