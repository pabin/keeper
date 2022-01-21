const note = {
  title: 'note title',
  body: '**this is test note**\n`this is new lne`',
  id: 100,
  isFavourite: false,
  isArchived: false,
  createdAt: '2022-01-21T05:49:45.613Z',
  updatedAt: '2022-01-21T05:52:58.634Z',
};

const favouriteNote = { ...note, isFavourite: true };

const archivedNote = { ...note, isArchived: true };

export { note, favouriteNote, archivedNote };
