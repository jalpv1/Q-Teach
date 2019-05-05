import {Component, OnInit} from '@angular/core';
import {NoteItem} from './note-item/note-item.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  notes: NoteItem[];

  constructor() {
  }

  ngOnInit(): void {
    this.notes = [{id: null, title: '333', subtitle: '333'}];
  }

  add(title: string, subtitle: string): void {
    this.notes.push(new NoteItem(null, title, subtitle));
  }

  deleteTask(note: NoteItem): void {
    this.notes = this.notes.filter(n => n !== note);
  }

}
