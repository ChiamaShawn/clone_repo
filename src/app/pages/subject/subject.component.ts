import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {  PageServiceService } from '../page-service.service';
@Component({
  selector: 'ngx-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})

export class SubjectComponent implements OnInit {
  subject_form: any;
  subjects: any;
  settings = {
    actions: {
      add:false,
      edit:false,
      delete:false,
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
      subject_name: {
        title: 'Subject Name',
        type: 'string',
      },



    },
  };
  constructor(private data_service: PageServiceService) {
    const subject_name = new FormControl('', Validators.required);
    this.subject_form = new FormGroup({
    subject_name: subject_name
  })
   }

  ngOnInit() {
    this.getSubjects();
  }
  onClick(){
    this.data_service.createSubject(this.subject_form.value).subscribe(response => {
      console.log(response);
      this.getSubjects();
    })
  }
  getSubjects() {
    this.data_service.getSubjects().subscribe(response => {
      console.log(response);
      this.subjects = response;
    })
  }
}
