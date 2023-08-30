import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupNoteComponent } from '../popup-note/popup-note.component';


@Component({
  selector: 'app-index-genres',
  templateUrl: './index-genres.component.html',
  styleUrls: ['./index-genres.component.css']
})
export class IndexGenresComponent {
  constructor(private _dialog :MatDialog) {}

  openNoteDialog() {
    this._dialog.open(PopupNoteComponent);
  }
}
