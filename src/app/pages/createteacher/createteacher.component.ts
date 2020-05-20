import { Component, OnInit } from '@angular/core';
import { PageServiceService } from "../page-service.service";
import { FormGroup, Validators, FormControl } from "@angular/forms";
@Component({
  selector: 'ngx-createteacher',
  templateUrl: './createteacher.component.html',
  styleUrls: ['./createteacher.component.scss']
})
export class CreateteacherComponent implements OnInit {
  teachers: any;
  schools: any;
  school_form: any;
  settings = {
    action: {

      edit: false,
      delete: false
    },

    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },

    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      name: {
        title: 'Teacher Name',
        type: 'string',
      },

      email: {
        title: 'email',
        type: 'string',

      }



    },
  };
  constructor(private page_service: PageServiceService) {
    const school_code = new FormControl('', Validators.required);

    this.school_form = new FormGroup({
      school_code: school_code
    })

  }

  ngOnInit() {
    this.getSchools();
  }
  getStudents(){
    this.page_service.getStudents().subscribe(response => {
      console.log(response);
      this.teachers = response;
    })
  }
  getSchools(){

    this.page_service.getSchools().subscribe(response => {
      console.log(response);
      this.schools = response;
    })
  }
  createStudent(e){
    console.log(e);
  }
  onSchoolChange(e){
    console.log(e);
    this.page_service.getStudentsFromSchool(e).subscribe(response => {
      console.log(e);
      console.log(response);
      this.teachers = response;
    });
  }
  onCreateConfirm(event):void {
    console.log(event);
    let data = {
      user_type: "teacher",
      password: 12345,
      school_code: this.school_form.value.school_code,
      name: event.newData.name,
      email: event.newData.email,
      class: event.newData.class
    }
    this.page_service.createTeacher(data).subscribe(response => {
      console.log(response);
      event.confirm.resolve();
    })
  }

  onSaveConfirm(event):void {
    console.log("jeez");
  }

  onDeleteConfirm(event): void {
    console.log("jeez");
  }
}
