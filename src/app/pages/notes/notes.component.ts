import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NoteService } from '../../services/note.service';
import { NoteCardComponent } from '../../components/note-card/note-card.component';
import { CreateNoteComponent } from '../../components/create-note/create-note.component';
import NoteResponse from '../../../models/NoteResponse';
import { switchMap } from 'rxjs';
import { NoteRequest } from '../../../models/NoteRequest';

@Component({
  selector: 'app-notes',
  imports: [HeaderComponent, NoteCardComponent, CreateNoteComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css',
})
export class NotesComponent implements OnInit {
  //Variables
  hasError: boolean = false;
  isLoading: boolean = true;

  //Contructor
  constructor(public noteService: NoteService) {}

  //OnInit
  ngOnInit(): void {
    this.getNotes();
  }

  //GET
  getNotes() {
    this.noteService.getNotes().subscribe({
      next: (data) => {
        this.noteService.notes = data.reverse(); //Para que aparezcan en orden de creación
        this.isLoading = false;
        this.hasError = false;
      },
      error: (e) => {
        console.log('Error en getNotes');
        this.hasError = true;
      },
    });
  }

  onUpdateNote(note: NoteResponse) {
    this.noteService
      .updateNote(note)
      .pipe(switchMap(() => this.noteService.getNotes()))
      .subscribe({
        next: (data) => {
          this.noteService.notes = data.reverse();
        },
        error: (e) => {
          this.hasError = true;
        },
      });
  }

  onDeleteNote(id: number) {
    this.noteService
      .deleteNote(id)
      .pipe(switchMap(() => this.noteService.getNotes()))
      .subscribe({
        next: (data) => {
          this.noteService.notes = data.reverse();
        },
        error: (e) => {
          console.log('Error en deleteNote');
          this.hasError = true;
        },
      });
  }

  onNoteCreated(createdNote: NoteRequest): void {
    this.noteService
      .createNote(createdNote)
      .pipe(switchMap(() => this.noteService.getNotes()))
      .subscribe({
        next: (data) => {
          this.noteService.notes = data.reverse();
          console.log('✅ Nota creada, notificando al padre...');
        },
        error: (e) => {
          console.error('❌ Error al crear nota:', e);
        },
      });
  }
}
