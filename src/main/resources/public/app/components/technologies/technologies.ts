import {Component} from 'angular2/core';
import {Http} from 'angular2/http';

@Component({
  selector: 'technologies',
  templateUrl: 'app/components/technologies/technologies.html',
  //template: require('./technologies.html'),
  styleUrls: [],
  providers: [],
  directives: [],
  pipes: []
})
export class Technologies {

  constructor(http:Http) {
    
  }
}
