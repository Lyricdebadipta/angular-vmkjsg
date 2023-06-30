import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  @Input() value: any;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    console.log('child loaded');
  }

  ngOnChanges() {
    this.cd.markForCheck();
    console.log('child', this.value);
  }
}
