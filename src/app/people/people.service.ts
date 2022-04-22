import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { people } from "./people";

@Injectable()
export class PeopleService {
    peopleUrl = 'https://swapi.dev/api/people/'; 
    

    constructor(private http: HttpClient) {

    }
    getpeople(): any {
   return this.http.get(this.peopleUrl);
         
  }
}