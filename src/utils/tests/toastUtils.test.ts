import Toast from 'react-native-toast-message';
import { archivedNote, favouriteNote } from '../../fixtures/notes';

import { getStatusUpdateMessage, showToast } from '../toastUtils';

describe('getStatusUpdateMessage', () => {
  describe('when type is favourite', () => {
    const action = 'favourite';

    test('status message when note is already in favourite', () => {
      const message = getStatusUpdateMessage(action, favouriteNote);
      expect(message).toEqual('removed from favourite successfully!');
    });

    test('status message when note is not in favourite', () => {
      const note2 = { ...favouriteNote, isFavourite: false };
      const message = getStatusUpdateMessage(action, note2);
      expect(message).toEqual('marked as favourite successfully!');
    });
  });

  describe('when type is archive', () => {
    const action = 'archive';

    test('status message when note is already in archived', () => {
      const message = getStatusUpdateMessage(action, archivedNote);
      expect(message).toEqual('removed from archived successfully!');
    });

    test('status message when note is not in archived', () => {
      const note2 = { ...archivedNote, isArchived: false };
      const message = getStatusUpdateMessage(action, note2);
      expect(message).toEqual('marked as archived successfully!');
    });
  });
});

describe('showToast', () => {
  test('show right toast message', () => {
    const type = 'success';
    const text1 = 'text message title';
    const text2 = 'text message body';

    showToast(type, text1, text2);
    expect(Toast.show).toHaveBeenCalled();
  });
});
