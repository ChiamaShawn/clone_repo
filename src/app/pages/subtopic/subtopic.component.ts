import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { PageServiceService } from "../page-service.service";
@Component({
  selector: 'ngx-subtopic',
  templateUrl: './subtopic.component.html',
  styleUrls: ['./subtopic.component.scss']
})

export class SubtopicComponent implements OnInit {
  subjects: any;
  subtopic_form: any;
  topics: any;
  classes:any;
  subtopics:any;
  settings = {
    actions: {
      add:false
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
      subtopic_name: {
        title: 'Subtopic Name',
        type: 'string',
      },
      topic_id: {
        title: "Topic ID",
        type: "number"
      },
      subject_id: {
        title: 'Subject ID',
        type: 'number'
      },
      class: {
        title: 'Class ID',
        type: 'number'
      }
     },
  };
  constructor(private page_service:PageServiceService) {
    const subject_id = new FormControl('', Validators.required);
    const class_ = new FormControl('', Validators.required);
    const topic_id = new FormControl('', Validators.required);
    const subtopic_name = new FormControl('', Validators.required);
    this.subtopic_form = new FormGroup({
      subject_id: subject_id,
      class_: class_,
      topic_id: topic_id,
      subtopic_name: subtopic_name
    })
   }

  ngOnInit() {
    this.getSubjects();
    this.getClasses();
    // this.getTopics();
    this.getSubtopics();
  }


  getSubjects(){
    this.page_service.getSubjects().subscribe(response => {
      console.log(response);
      this.subjects = response;
    })
  }
  getClasses(){
    this.page_service.getClasses().subscribe(response =>  {
      console.log("classes");
      console.log(response);
      this.classes = response
    })
  }
  getTopics(){
    console.log(this.subtopic_form.value.subject_id);
    console.log(this.subtopic_form.value.class_)
    this.page_service.getTopicsFromClass(this.subtopic_form.value.subject_id, this.subtopic_form.value.class_).subscribe(response => {
      console.log(response);
      this.topics = response;
    })
  }
  getSubtopics(){
    this.page_service.getSubtopics().subscribe(response => {
      console.log(response);
      this.subtopics = response;
    })
  }
  onSubjectChange(value){

  }
  addSubtopic(){
    console.log(this.subtopic_form.value);
    this.page_service.createSubtopic(this.subtopic_form.value).subscribe(response => {
      console.log(response);
      this.subtopics = response;
      this.getSubtopics();
    })
  }


}
