import { Component, OnInit } from '@angular/core';
import { PageServiceService } from "../page-service.service";
import { ToastrService } from 'ngx-toastr';
import { FormControl, Validators, FormGroup} from "@angular/forms";
@Component({
  selector: 'ngx-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {
  students: any;
  student_form: any;
  school_code: any;
  school_form: any
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
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },

    columns: {
      student_code: {
        title: 'Student Code',
        type: String,
        editable:false,
          addable: false,
      },
      name: {
        title: 'Student Name',
        type: 'string',
      },

      school_code: {
        title: 'School Code',
        type: 'string',
        editable:false,
        addable: false
      },
      class: {
        title: 'Grade'
      }



    },
  };
  constructor(private page_service:PageServiceService, private toaster_service: ToastrService) {
    const school_code = new FormControl('', Validators.required)
    this.school_form = new FormGroup({
      school_code:school_code
    })

  }

  ngOnInit() {
    this.getSchools();
    this.getStudents();
  }
  getStudents(){
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
    this.school_code = e;
    this.page_service.getStudentsFromSchool(e).subscribe(response => {
      console.log(e);
      console.log(response);
      this.students = response;
    });
  }
  onCreateConfirm(event):void {
    console.log(event);
    let data = {
      user_type: "student",
      password: this.school_form.value.school_code,
      school_code: this.school_form.value.school_code,
      name: event.newData.name,
      email: event.newData.email,
      class: event.newData.class
    }
    this.page_service.createStudent(data).subscribe(response => {
      console.log(response);
      this.toaster_service.success('Success', 'Student Created');

      this.page_service.getStudentsFromSchool(this.school_code).subscribe(response => {
        console.log(response);
        this.students = response;
      });
      event.confirm.resolve();
    }, err => {
      console.log(err);
      this.toaster_service.error('Failed', 'Unable to create Student');
    })
  }

  onSaveConfirm(event):void {
    console.log("jeez");
  }

  onDeleteConfirm(event): void {
    console.log("jeez");
  }
}
