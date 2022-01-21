const note = {
  title: 'note title',
  body: '**this is test note**\n`this is new lne`',
  id: 100,
  isFavourite: false,
  isArchived: false,
  createdAt: '2022-01-21T05:49:45.613Z',
  updatedAt: '2022-01-21T05:52:58.634Z',
};

const note2 = {
  title: 'note title 2',
  body: '**this is test note 2**\n`this is new lne`',
  id: 101,
  isFavourite: false,
  isArchived: false,
  createdAt: '2022-01-22T05:49:45.613Z',
  updatedAt: '2022-01-22T05:52:58.634Z',
};

const note3 = {
  title: 'note title 3',
  body: '**this is test note 3**\n`this is new lne`',
  id: 101,
  isFavourite: false,
  isArchived: false,
  createdAt: '2022-01-22T05:49:45.613Z',
  updatedAt: '2022-01-22T05:52:58.634Z',
};

const favouriteNote = { ...note, isFavourite: true };
const favouriteNote2 = { ...note2, isFavourite: true };
const favouriteNote3 = { ...note3, isFavourite: true };

const archivedNote = { ...note, isArchived: true };
const archivedNote2 = { ...note2, isArchived: true };
const archivedNote3 = { ...note3, isArchived: true };

const notes = [note, note2, note3];

const archivedNotes = [favouriteNote, favouriteNote2, favouriteNote3];
const favouriteNotes = [archivedNote, archivedNote2, archivedNote3];

export {
  note,
  notes,
  favouriteNote,
  favouriteNotes,
  archivedNote,
  archivedNotes,
};
