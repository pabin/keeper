import { Note } from './note';

export type RootStackParamList = {
  NoteList: undefined;
  CreateNotes: { note: Note } | undefined;
  NoteDetail: { note: Note };
};
