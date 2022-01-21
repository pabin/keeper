import { Note } from './note';

export interface NoteContextInterface {
  notes: Note[];
  loading: boolean;
  favouriteNotes: Note[];
  archivedNotes: Note[];
  onCreateOrUpdateNote: (
    note: Note,
    title: string,
    body: string,
  ) => Promise<void>;
  onNoteStatusUpdate: (note: Note, action: string) => Promise<void>;
  theme: Themes;
}

type Themes = {
  light: ThemeColor;
  dark: ThemeColor;
};

type ThemeColor = {
  foreground: string;
  background: string;
};
