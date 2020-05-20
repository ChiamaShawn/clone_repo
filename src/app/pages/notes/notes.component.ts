import { Component, OnInit } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { PageServiceService } from "../page-service.service";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
@Component({
  selector: "ngx-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.scss"]
})
export class NotesComponent implements OnInit {
  public Editor = ClassicEditor;

  subjects: any;
  classes: any;
  topics: any;
  subtopics: any;
  notes_form: any;
  public model = {
    editorData: "",
    config: {
      // Enable the "Insert image" button in the toolbar.

      ckfinder: {
        uploadUrl: "http://localhost:8000/api/fileUpload"
      }
    }
  };

  constructor(private page_service: PageServiceService, private toaster_service: ToastrService) {
    const subject_id = new FormControl("", Validators.required);
    const class_ = new FormControl("", Validators.required);
    const topic_id = new FormControl("", Validators.required);
    const subtopic_id = new FormControl("", Validators.required);
    this.notes_form = new FormGroup({
      subject_id: subject_id,
      class_: class_,
      topic_id: topic_id,
      subtopic_id: subtopic_id
    });
  }

  ngOnInit() {
    this.getSubjects();
    this.getClasses();
    this.getTopics();
    this.getSubtopics();
    let data = this.Editor.data;
    console.log(data);
  }
  getSubjects() {
    this.page_service.getSubjects().subscribe(response => {
      console.log(response);
      this.subjects = response;
    });
  }
  getClasses() {
    this.page_service.getClasses().subscribe(response => {
      console.log("classes");
      console.log(response);
      this.classes = response;
    });
  }
  getTopics(){
    console.log(this.notes_form.value.subject_id);
    console.log(this.notes_form.value.class_)
    this.page_service.getTopicsFromClass(this.notes_form.value.subject_id, this.notes_form.value.class_).subscribe(response => {
      console.log(response);
      this.topics = response;
    })
  }
  getSubtopics() {
    this.page_service.getSubtopicsWhereTopic(this.notes_form.value.topic_id).subscribe(response => {
      console.log(response);
      console.log()
      this.subtopics = response;
    });
  }
  giveDataOutput() {
    console.log(this.model.editorData);
  }
  submitNotes() {
    this.page_service
      .uploadNotes(this.notes_form.value, this.model.editorData)
      .subscribe(response => {
        console.log(response);
        // alert("Notes uploaded successfully");
        this.toaster_service.success('Successs', 'Notes uploaded successfully.');
      }, err => {
        console.log(err);
        this.toaster_service.error('Failed', 'Notes Upload failed');
      });
  }
}
