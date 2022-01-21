import { Note } from './../types/note';
import { getText } from '../assets/i18n';
import { getStatusUpdateMessage, showToast } from '../utils/toastUtils';
import { getObjectData, storeObjectData } from './storageUtils';

const updateNoteStatus = async (note: Note, action: string): Promise<void> => {
  const notesData = (await getObjectData('notes')) || [];
  if (notesData.length) {
    notesData.map((n: Note) => {
      if (n.id === note.id) {
        action === 'favourite'
          ? (n.isFavourite = !n.isFavourite)
          : (n.isArchived = !n.isArchived);
        n.updatedAt = new Date();
      }
    });

    try {
      await storeObjectData('notes', notesData);
      showToast(
        'success',
        getText('toast.updated.title1'),
        `${note.title} ${getStatusUpdateMessage(action, note)}`,
      );
    } catch (err) {
      /* istanbul ignore next */
      showToast(
        'error',
        getText('toast.errUpdate.title1'),
        `${getText('toast.errUpdate.title2')} ${note.title}`,
      );
    }
  }
};

const createOrUpdateNoteDetails = async (
  note: Note,
  title: string,
  body: string,
): Promise<void> => {
  const notesData: Note[] = (await getObjectData('notes')) || [];

  if (notesData.length && note) {
    notesData.map((n: Note) => {
      if (note && n.id === note.id) {
        n.title = title;
        n.body = body;
        n.updatedAt = new Date();
      }
    });

    try {
      await storeObjectData('notes', notesData);
      showToast(
        'success',
        getText('toast.updated.title1'),
        `${note.title} ${getText('toast.updated.title2')}`,
      );
    } catch (err) {
      /* istanbul ignore next */
      showToast(
        'error',
        getText('toast.errUpdate.title1'),
        `${getText('toast.errUpdate.title2')} ${note.title}`,
      );
    }
  } else {
    let noteId = 1;
    notesData.map((n: Note) => (noteId <= n.id ? (noteId = n.id + 1) : noteId));

    const newNote: Note = {
      title,
      body,
      id: noteId,
      isFavourite: false,
      isArchived: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    notesData.unshift(newNote);

    try {
      await storeObjectData('notes', notesData);
      showToast(
        'success',
        getText('toast.created.title1'),
        `${title} ${getText('toast.created.title2')}`,
      );
    } catch (err) {
      /* istanbul ignore next */
      showToast(
        'error',
        getText('toast.errCreate.title1'),
        `${getText('toast.errCreate.title2')} ${title}`,
      );
    }
  }
};

export { updateNoteStatus, createOrUpdateNoteDetails };
