import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Output() lineClick: EventEmitter<any> = new EventEmitter();
  hours: string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.generateHours();
  }

  generateHours() {
    for(let i=0; i<24; i++) {
      this.hours.push(`${i%12} ${i<=12 ? 'am' : 'pm'}`)
    }
  }

  onClick(hour: string) {
    this.lineClick.emit(hour)
  }
 
}
