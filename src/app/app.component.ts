import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'person';

  @Input() person: any;
  @Output() handleDelete: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  delete(id: string) {
    this.handleDelete.emit(id);
  }
}
