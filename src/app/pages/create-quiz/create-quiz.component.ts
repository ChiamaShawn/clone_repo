import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup} from '@angular/forms';
import { PageServiceService } from "../page-service.service";

import { ToastrService } from 'ngx-toastr';

import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ToasterService } from 'angular2-toaster';
@Component({
  selector: 'ngx-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {
  detail_form: any;

  public Editor = ClassicEditor;
  question: string;
  quiz_id: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  option_a_explanation: string;
  option_b_explanation: string;
  option_c_explanation: string;
  option_d_explanation: string;
  subjects;
  classes;
  topics;
  subtopics;
  public model = {
    question: "",
    option_a: "",
    option_b: "",
    option_c: "",
    option_d: "",
    option_a_explanation: "",
    option_b_explanation: "",
    option_c_explanation: "",
    option_d_explanation: "",
    answer: "",
    additional_notes:"",
    config: {
      // Enable the "Insert image" button in the toolbar.

      ckfinder: {
        uploadUrl: "http://localhost:8000/api/fileUpload"
      }
    }
  };
  option_a_config: {
    placeholder: 'Option A'
  };
  option_b_config: {
    placeholder: 'Option B'
  };
  option_c_config: {
    placeholder: 'Option C'
  };
  option_d_config: {
    placeholder: 'Option D'
  };
  option_a_exp_config: {
    placeholder: 'Option A Explanation'
  };
  option_b_exp_config: {
    placeholder: 'Option B Explanation'
  };
  option_c_exp_config: {
    placeholder: 'Option C Explanation'
  };
  option_d_exp_config: {
    placeholder: 'Option D EXplanation'
  };
  additional_notes_config: {
    placeholder: 'Additional Notes'
  };
  question_config: {
    placeholder: 'Question'
  };


  constructor(private data_service: PageServiceService, private toastr: ToastrService) {
    const class_ = new FormControl('', Validators.required);
    const subject_id = new FormControl('', Validators.required);
    const subtopic_id = new FormControl('', Validators.required);
    const topic_id = new FormControl('', Validators.required);



    this.detail_form = new FormGroup({
      class_: class_,
      subject_id: subject_id,
      subtopic_id: subtopic_id,
      topic_id: topic_id
    })

   }

  ngOnInit() {
    this.getSubjects();
    this.getClasses();
  }
  getSubjects() {
    this.data_service.getSubjects().subscribe(response => {
      console.log(response);
      this.subjects = response;
    });
  }
  getClasses() {
    this.data_service.getClasses().subscribe(response => {
      console.log("classes");
      console.log(response);
      this.classes = response;
    });
  }
  getTopics(){
    console.log(this.detail_form.value.subject_id);
    console.log(this.detail_form.value.class_)
    this.data_service.getTopicsFromClass(this.detail_form.value.subject_id, this.detail_form.value.class_).subscribe(response => {
      console.log(response);
      this.topics = response;
    })
  }
  getSubtopics() {
    this.data_service.getSubtopicsWhereTopic(this.detail_form.value.topic_id).subscribe(response => {
      console.log(response);
      console.log()
      this.subtopics = response;
    });
  }
  giveDataOutput() {
    console.log(this.model);
  }
  postQuestion(){
    this.data_service.createQuizQuestion(this.model,this.detail_form.value.subtopic_id).subscribe(response => {
      alert("Question posted");
      this.model.question = "";
      this.model.option_a = "";
      this.model.option_b = "";
      this.model.option_c = "";
      this.model.option_d = "";
      this.model.option_a_explanation = "";
      this.model.option_b_explanation = "";
      this.model.option_c_explanation = "";
      this.model.option_d_explanation = "";
      this.model.answer = "";
      this.model.additional_notes = "";
      this.showSuccess();
      console.log(response);
    })

  }
  showSuccess() {
    this.toastr.success('Success', 'Question Posted');
  }
}
