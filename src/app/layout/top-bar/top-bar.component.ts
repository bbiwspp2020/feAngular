import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  @Input() PData: number | undefined;
  @Output() childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onChange(value:any) {
    this.childEvent.emit(value);
  }
}
