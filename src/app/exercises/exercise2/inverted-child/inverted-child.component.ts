import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inverted-child',
  templateUrl: './inverted-child.component.html',
  styleUrls: ['./inverted-child.component.css']
})
export class InvertedChildComponent implements OnInit {
data: any;

  constructor() { }

  ngOnInit() {
  }
  sendToInvertedParent(param: any) {
    console.log(param);
    this.data = param;
  }
  
}