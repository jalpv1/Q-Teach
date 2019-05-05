import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NoteItem} from './note-item.model';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  @Input()
  note: NoteItem;
  @Output()
  deleteNote = new EventEmitter<NoteItem>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onDelete(note: NoteItem): void {
    this.deleteNote.emit(note);
  }

}
