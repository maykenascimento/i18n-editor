import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects = [];
  constructor() { }

  ngOnInit() {
    this.projects = [{
      "projectId": 1,
      "title": "Span",
      "languages": [
        {
          "name": "lb"
        }
      ],
      "terms": 460
    }, {
      "projectId": 2,
      "title": "Kanlam",
      "languages": [
        {
          "name": "ro"
        },
        {
          "name": "nl"
        }
      ],
      "terms": 12
    }, {
      "projectId": 3,
      "title": "Konklux",
      "languages": [
        {
          "name": "mh"
        },
        {
          "name": "de"
        },
        {
          "name": "be"
        },
        {
          "name": "pt"
        }
      ],
      "terms": 567
    }];
  }

  openProject(project) {
    alert('asdfklj');
  }
}
