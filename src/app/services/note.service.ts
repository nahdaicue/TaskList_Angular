import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NoteRequest } from '../../models/NoteRequest';
import NoteResponse from '../../models/NoteResponse';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  //para probar conexión a una API => https://beeceptor.com/crud-api/

  readonly API_URL = 'http://localhost:8080/taskList';
  notes: NoteResponse[] = [];

  constructor(private http: HttpClient) {
    this.notes = [];
  }

  //CRUD---------------------------------------------------------------------------------------------------
  //GET
  getNotes() {
    return this.http.get<NoteResponse[]>(this.API_URL).pipe(
    map(data => data || [])
  );
  }

  //POST
  createNote(note: NoteRequest) {
    return this.http.post<NoteResponse>(this.API_URL, note);
  }

  //DELETE
  deleteNote(id: number) {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }

  //UPDATE
  updateNote(note: NoteResponse) {
  if (!note.id) {
    throw new Error('El ID de la nota es obligatorio para actualizar');
  }
  return this.http.put<NoteResponse>(`${this.API_URL}/${note.id}`, note);
}

  // Actualizaciones locales (no sincronizan con backend)
  updateTitle(id: number, newTitle: string) {
    const updatedNote = this.notes.find((note) => note.id === id);
    if (!updatedNote) return;
    updatedNote.title = newTitle;
  }

  updateMarked(id: number) {
    const updatedNote = this.notes.find((note) => note.id === id);
    if (!updatedNote) return;
    updatedNote.marked = !updatedNote.marked;
  }
}
