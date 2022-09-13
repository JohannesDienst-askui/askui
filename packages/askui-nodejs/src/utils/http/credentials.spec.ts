import { Credentials } from './credentials';

describe('Credentials', () => {
  describe('base64Encoded()', () => {
    test('should return base64-encoded credentials', () => {
      const credentials = new Credentials('password');

      expect(credentials.base64Encoded).toBe('cGFzc3dvcmQ=');
    });
  });
});
