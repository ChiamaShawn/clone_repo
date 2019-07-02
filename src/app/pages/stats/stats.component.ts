import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PageServiceService } from "../page-service.service";

@Component({
  selector: 'ngx-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  users: any;
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

      name: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string'
      },
      class: {
        title: 'Class'
      },
      last_login: {
        title: 'Last Login',
        valuePrepareFunction: (date) => {
          var raw = new Date(date * 1000);

          var formatted = this.datePipe.transform(raw, 'dd MMM yyyy HH:mm:SS');
          return formatted;
        }
      }
    },
  };
  constructor(private data_service: PageServiceService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(){
    this.data_service.getUsers().subscribe(response => {
      console.log(response);
      this.users = response;
    })
  }
}
