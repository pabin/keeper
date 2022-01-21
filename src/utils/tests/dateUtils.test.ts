import { formatDate } from '../dateUtils';

describe('formatDate date utils', () => {
  test('date format', () => {
    const date = '2022-01-21T06:58:46.681Z';
    const returnedDate = formatDate(date);
    console.log('returnedDate', returnedDate);
    expect(returnedDate).toEqual('Fri Jan 21 2022 | 12:43:46 PM');
  });
});
