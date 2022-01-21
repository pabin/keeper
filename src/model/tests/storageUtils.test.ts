import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  getObjectData,
  getStringData,
  storeObjectData,
  storeStringData,
} from '../asyncStorageUtils';

describe('storageUtils', () => {
  beforeEach(() => {
    AsyncStorage.clear();
  });

  describe('store async data', () => {
    test('storeObjectData', async () => {
      const data = { name: 'Romeo', age: '25' };
      await storeObjectData('myKey', data);
      const jsonValue = JSON.stringify(data);

      expect(AsyncStorage.setItem).toHaveBeenCalledWith('myKey', jsonValue);
    });

    test('storeStringData', async () => {
      const data = 'My String data';
      await storeStringData('myKey', data);

      expect(AsyncStorage.setItem).toHaveBeenCalledWith('myKey', data);
    });
  });

  describe('getObjectData', () => {
    test('when data exist', async () => {
      const key = 'myData';
      const data = { name: 'Romeo', age: '25' };

      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(key, jsonValue);

      const result = await getObjectData(key);

      expect(AsyncStorage.getItem).toHaveBeenCalledWith(key);
      expect(result).toEqual(data);
    });

    test('when data doesnt exist', async () => {
      const key = 'myData';
      const data = { name: 'Romeo', age: '25' };

      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(key, jsonValue);

      const result = await getObjectData('randomKey');

      expect(AsyncStorage.getItem).toHaveBeenCalledWith('randomKey');
      expect(result).toEqual(null);
    });
  });

  describe('getStringData', () => {
    test('getStringData when exist', async () => {
      const key = 'myData';
      const data = 'My String data';

      await AsyncStorage.setItem(key, data);

      const result = await getStringData(key);

      expect(AsyncStorage.getItem).toHaveBeenCalledWith(key);
      expect(result).toEqual(data);
    });

    test('getStringData when doesnt exist', async () => {
      const key = 'myData';
      const data = 'My String data';

      await AsyncStorage.setItem(key, data);

      const result = await getStringData('someRandomKey');

      expect(AsyncStorage.getItem).toHaveBeenCalledWith('someRandomKey');
      expect(result).toEqual(undefined);
    });
  });
});
