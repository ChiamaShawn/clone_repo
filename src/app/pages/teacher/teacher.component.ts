import { Component, OnInit } from "@angular/core";
import { PageServiceService } from "../page-service.service";

import { FormControl, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "ngx-teacher",
  templateUrl: "./teacher.component.html",
  styleUrls: ["./teacher.component.scss"]
})
export class TeacherComponent implements OnInit {
  students: any;
  student_form: any;
  school_code: any;
  school_form: any;
  schools: any;
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
      cancelButtonContent: '<i class="nb-close"></i>'
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true
    },

    columns: {
      id: {
        title: "ID",
        type: "number"
      },
      name: {
        title: "Student Name",
        type: "string"
      },
      school_code: {
        title: "School Code",
        type: "string"
      },
      email: {
        title: "Email",
        type: "string"
      },
      password: {
        title: "password"
      },
      class: {
        title: "Grade"
      }
    }
  };
  constructor(private page_service: PageServiceService) {}

  ngOnInit() {
    this.getSchools();
    this.getTeachers();
  }
  getTeachers(){
    this.page_service.getStudents().subscribe(response => {
      console.log(response);
      this.students = response
    })
  }
  getSchools(){
    console.log(this.school_code);
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
      this.students = response;
    });
  }
  onCreateConfirm(event):void {
    console.log(event);
    let data = {
      user_type: "teacher",
      password: this.school_form.value.school_code,
      school_code: this.school_form.value.school_code,
      name: event.newData.name,
      email: event.newData.email,
      class: event.newData.class
    }
    this.page_service.createStudent(data).subscribe(response => {
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
