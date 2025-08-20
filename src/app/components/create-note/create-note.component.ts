import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../../services/note.service';
import { CommonModule } from '@angular/common';
import { NoteRequest } from '../../../models/NoteRequest';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-create-note',
  imports: [FormsModule, CommonModule],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.css',
})
export class CreateNoteComponent {
  //Variables
  noteTitle: string = '';
  isCreating = false; //Está sin implementar.
  createNote = output<NoteRequest>();

  //Constructor
  constructor(public noteService: NoteService) {}

  handleSubmit = (): void => {
    const trimmedTitle = this.noteTitle.trim();

    if (!trimmedTitle || this.isCreating) {
      this.noteTitle = trimmedTitle ? trimmedTitle : '';
      return;
    }

    this.createNote.emit({
      title: trimmedTitle,
      marked: false,
    });

    this.noteTitle = '';
  };

}
