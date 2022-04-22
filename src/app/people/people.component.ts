import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { people } from "./people";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  peopleUrl = 'https://swapi.dev/api/people/'
  people: people[] = []
  constructor(private http: HttpClient) { }
  ngOnInit() {


  }
  
  
}
