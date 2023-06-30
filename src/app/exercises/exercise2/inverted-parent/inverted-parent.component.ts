import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inverted-parent',
  templateUrl: './inverted-parent.component.html',
  styleUrls: ['./inverted-parent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvertedParentComponent implements OnInit {
  @Input() data: any;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    console.log('child loaded');
  }

  ngOnChanges() {
    this.cd.markForCheck();
    console.log('child', this.data);
  }
}
