import { Injectable } from '@angular/core';
import Note from '../../models/Note';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  //para probar conexión a una API => https://beeceptor.com/crud-api/

  readonly API_URL =
    'https://ca27f92c5c21cb3649b7.free.beeceptor.com/api/notes/';
  notes: Note[] = [];

  constructor(private http: HttpClient) {
    this.notes = [];
  }

  //CRUD---------------------------------------------------------------------------------------------------
  //GET
  getNotes() {
    return this.http.get<Note[]>(this.API_URL);
  }

  //POST
  createNote(note: Note) {
    return this.http.post<Note>(this.API_URL, note);

    //Trabajas en local, descomenta la linea de abajo y comenta lo de arriba
    // this.notes.unshift(note);      //unshift en vez de push porque lo agrega al principio del array
  }

  //DELETE
  deleteNote(id: string) {
    return this.http.delete<any>(`${this.API_URL}${id}`);
  }

  //UPDATE
  updateNote(note: Note) {
    if (!note.id) {
      throw new Error('El ID de la nota es obligatorio para actualizar');
    }
    return this.http.put<Note>(`${this.API_URL}${note.id}`, note);
  }

  updateTitle(id: string, newTitle: string) {
    const updatedNote = this.notes.find((note) => note.id === id);
    if (!updatedNote) return; //Es para no poner el ? en updatedNote?.title = newTitle;
    updatedNote.title = newTitle;
  }

  updateMarked(id: string) {
    const updatedNote = this.notes.find((note) => note.id === id);
    if (!updatedNote) return; //Es para no poner el ? en updatedNote?.title = newTitle;
    updatedNote.marked = !updatedNote.marked;
  }

  //  Creador de id aleatorio
  createId = () => {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  };
}
