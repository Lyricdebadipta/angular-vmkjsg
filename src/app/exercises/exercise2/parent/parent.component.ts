import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  value = '';
  constructor() {}

  ngOnInit() {}

  sendToChild(param: any) {
    console.log(param);
    this.value = param;
  }
}
