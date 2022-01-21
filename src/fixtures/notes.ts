import { Note } from './../types/note';

const note: Note = {
  title: 'note title',
  body: '**this is test note**\n`this is new lne`',
  id: 100,
  isFavourite: false,
  isArchived: false,
  createdAt: new Date('2022-01-21T05:49:45.613Z'),
  updatedAt: new Date('2022-01-21T05:52:58.634Z'),
};

const note2: Note = {
  title: 'note title 2',
  body: '**this is test note 2**\n`this is new lne`',
  id: 101,
  isFavourite: false,
  isArchived: false,
  createdAt: new Date('2022-01-21T05:49:45.613Z'),
  updatedAt: new Date('2022-01-21T05:52:58.634Z'),
};

const note3: Note = {
  title: 'note title 3',
  body: '**this is test note 3**\n`this is new lne`',
  id: 102,
  isFavourite: false,
  isArchived: false,
  createdAt: new Date('2022-01-21T05:49:45.613Z'),
  updatedAt: new Date('2022-01-21T05:52:58.634Z'),
};

const favouriteNote: Note = { ...note, isFavourite: true };
const favouriteNote2: Note = { ...note2, isFavourite: true };
const favouriteNote3: Note = { ...note3, isFavourite: true };

const archivedNote: Note = { ...note, isArchived: true };
const archivedNote2: Note = { ...note2, isArchived: true };
const archivedNote3: Note = { ...note3, isArchived: true };

const notes: Note[] = [note, note2, note3];

const favouriteNotes: Note[] = [favouriteNote, favouriteNote2, favouriteNote3];
const archivedNotes: Note[] = [archivedNote, archivedNote2, archivedNote3];

export {
  note,
  notes,
  favouriteNote,
  favouriteNotes,
  archivedNote,
  archivedNotes,
};
