import { Component } from '@angular/core';

import { Router,ActivatedRoute, Params} from '@angular/router';
import { from } from 'rxjs';
import { LoginComponent} from './login/login.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'Vitarrico';
}
