import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
