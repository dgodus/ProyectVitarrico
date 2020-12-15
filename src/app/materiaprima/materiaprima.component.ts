import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params} from '@angular/router';



@Component({
  selector: 'app-materiaprima',
  templateUrl: './materiaprima.component.html',
  styleUrls: ['./materiaprima.component.css'],
 
})
export class MateriaprimaComponent implements OnInit {
  

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

}
