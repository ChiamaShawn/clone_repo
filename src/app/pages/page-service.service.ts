import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PageServiceService {
  api_url: string = "http://localhost:8000/api";
  constructor(private http: HttpClient) { }

  loginAttempt(login_form: any){

    return this.http.post(this.api_url + "/auth/loginAdmin", login_form);
  }
  getClasses(){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('angaza_admin_token')
    })
    return this.http.get(this.api_url + "/getClasses", {headers: headers})
  }
  getSubjects(){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('angaza_admin_token')
    })
    return this.http.get(this.api_url + '/getSubjects', {headers: headers});
  }
  createSubject(form_data:any){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('angaza_admin_token')
    });
    return this.http.post(this.api_url + '/createSubject', form_data, {headers: headers});
  }
  getTopics(){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('angaza_admin_token')
    });
    return this.http.get(this.api_url + '/getAllTopics', {headers: headers});
  }
  createTopic(form_data:any){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('angaza_admin_token')
    })
    return this.http.post(this.api_url + '/createTopic', form_data, {headers: headers});
  }
  getSubtopics(){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('angaza_admin_token')
    })
    return this.http.get(this.api_url + '/getAllSubtopics', {headers: headers});
  }
  createSubtopic(form_data:any){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('angaza_admin_token')
    })
    return this.http.post(this.api_url + '/createSubtopic', form_data, {headers: headers});
  }
  getNotes(){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('angaza_admin_token')
    })
    return this.http.get(this.api_url + '/notes', {headers: headers});
  }
  createNotes(form_data:any){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('angaza_admin_token')
    })
    return this.http.post(this.api_url + '/createTopic', {headers: headers});
  }
  getUsers(){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('angaza_admin_token')
    })
    return this.http.get(this.api_url + '/userData', {headers: headers});
  }
  uploadNotes(form_data, notes_Data:String){
    let data = {
      subject_id: form_data.subject_id,
      class_: form_data.class_,
      topic_id: form_data.topic_id,
      subtopic_id: form_data.subtopic_id,
      notes: notes_Data

    }
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('angaza_admin_token')
    })
    return this.http.post(this.api_url + '/postAngazaNotes',data, {headers: headers})
  }
  createSchool(school_data){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('angaza_admin_token')
    })
    return this.http.post(this.api_url + '/createSchool', school_data, {headers:headers});
  }
  getSchools(){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('angaza_admin_token')
    })
    return this.http.get(this.api_url + "/getSchools", {headers:headers});
  }
  getCounties() {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('angaza_admin_token')
    })
    return this.http.get(this.api_url + "/getCounties", {headers:headers});
  }
  getStudents(){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('angaza_admin_token')
    })
    return this.http.get(this.api_url + "/getStudents", {headers: headers});
  }
  getSubtopicsWhereTopic(topic_id){
    let data = {
      topic_id: topic_id
    }
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('angaza_admin_token')
    })
    return this.http.post(this.api_url + "/getSubtopicsWhereTopic",data,{headers:headers});
  }
  getStudentsFromSchool(school_code){
    let data = {
      school_code: school_code
    }
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('angaza_admin_token')
    })
    console.log(data);
    return this.http.post(this.api_url + "/getStudentsFromSchool", data, {headers:headers});
  }
  createStudent(data){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('angaza_admin_token')
    })
    return this.http.post(this.api_url + "/createstudent", data, {headers:headers});

  }
  createTeacher(data){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('angaza_admin_token')
    })
    return this.http.post(this.api_url + "/createTeacher", data, {headers:headers});
  }
  getTopicsFromClass(subject_id, class_:number ){
    let data = {
      subject_id: subject_id,
      class_: class_
    }
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('angaza_admin_token')
    })
    return this.http.post(this.api_url + "/getTopicsFromClass", data, {headers:headers});
  }
  getSubtopicsFromClass(topic_id){
    let data = {
      topic_id: topic_id
    }
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('angaza_admin_token')
    })
    return this.http.post(this.api_url + "/getSubTopicsFromTopics", data, {headers:headers});
  }
createQuizQuestion(question_details: any, subtopic_id){
    question_details.school_id = '0101';
    question_details.subtopic_id = subtopic_id;
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('angaza_admin_token')
    })
    return this.http.post(this.api_url + "/createQuizQuestion", question_details, {headers:headers});
  }
}

