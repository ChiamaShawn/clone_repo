import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PageServiceService {
  api_url: string = "http://localhost:8000/api"
  constructor(private http: HttpClient) { }
  getClasses(){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('user_token')
    })
    return this.http.get(this.api_url + "/getClasses", {headers: headers})
  }
  getSubjects(){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('user_token')
    })
    return this.http.get(this.api_url + '/getSubjects', {headers: headers});
  }
  createSubject(form_data:any){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('user_token')
    });
    return this.http.post(this.api_url + '/createSubject', form_data, {headers: headers});
  }
  getTopics(){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('user_token')
    });
    return this.http.get(this.api_url + '/getAllTopics', {headers: headers});
  }
  createTopic(form_data:any){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('user_token')
    })
    return this.http.post(this.api_url + '/createTopic', form_data, {headers: headers});
  }
  getSubtopics(){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('user_token')
    })
    return this.http.get(this.api_url + '/getAllSubtopics', {headers: headers});
  }
  createSubtopic(form_data:any){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('user_token')
    })
    return this.http.post(this.api_url + '/createSubtopic', form_data, {headers: headers});
  }
  getNotes(){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('user_token')
    })
    return this.http.get(this.api_url + '/notes', {headers: headers});
  }
  createNotes(form_data:any){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('user_token')
    })
    return this.http.post(this.api_url + '/createTopic', {headers: headers});
  }
  getUsers(){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('user_token')
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
      'Authorization': 'Bearer ' + localStorage.getItem('user_token')
    })
    return this.http.post(this.api_url + '/postAngazaNotes',data, {headers: headers})
  }
  createSchool(school_data){
    return this.http.post(this.api_url + '/createSchool', school_data);
  }
}
