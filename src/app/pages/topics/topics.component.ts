import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { PageServiceService } from '../page-service.service';
@Component({
  selector: 'ngx-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  subjects: any;
  classes:any;
  topic_form: any;
  topics:any;
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
      topic_name: {
        title: 'Topic Name',
        type: 'string',
      },
      class: {
        title: "Topic Class",
        type: "number"
      },
      subject_id: {
        title: 'Subject',
        type: 'number'
      }
     },
  };
  class_enabled: boolean = false;
  constructor(private page_service: PageServiceService) {
    const subject_id = new FormControl('', Validators.required);
    const class_ = new FormControl('', Validators.required);
    const topic_name = new FormControl('', Validators.required);


    this.topic_form = new FormGroup({
      subject_id: subject_id,
      topic_name: topic_name,
      class_: class_
    })
   }

  ngOnInit() {
    this.getSubjects();
    this.getClasses();
    this.getTopics();
  }

  onClick(){
    console.log(this.topic_form.value);
    this.page_service.createTopic(this.topic_form.value).subscribe(response => {
      console.log(response);
      this.getTopics();
    })

  }
  onSubjectChange(value){
    console.log(value);
    this.class_enabled = true;
  }
  onClassChange(value){
    console.log(value);

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

    this.page_service.getTopics().subscribe(response => {
      console.log(response);
      this.topics = response;
    })
  }
}
