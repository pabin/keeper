import Toast from 'react-native-toast-message';
import { getText } from '../assets/i18n';

const showToast = (type: string, text1: string, text2: string) => {
  Toast.show({ type, text1, text2, position: 'bottom' });
};

const getStatusUpdateMessage = (action, note) => {
  const markedText = getText('toast.marked');
  const removedText = getText('toast.removed');
  const favourite = getText('toast.favourite');
  const archived = getText('toast.archived');

  if (action === 'favourite') {
    return `${note.isFavourite ? removedText : markedText} ${favourite}`;
  } else {
    return `${note.isArchived ? removedText : markedText} ${archived}`;
  }
};

export { showToast, getStatusUpdateMessage };
