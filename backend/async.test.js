/**
 * Ελέγχος: Ασύγχρονες Λειτουργίες & Mocks
 * Σκοπός: Επιβεβαίωση ότι το Jest διαχειρίζεται σωστά τις ασύγχρονες κλήσεις.
 */

describe('Asynchronous Operations Checks', () => {
  
  test('Επαλήθευση επιτυχούς επίλυσης Promise (Resolve)', async () => {
    const mockDbCall = () => new Promise(resolve => setTimeout(() => resolve('data_fetched'), 50));
    const result = await mockDbCall();
    expect(result).toBe('data_fetched');
  });

  test('Επαλήθευση σωστής διαχείρισης σφάλματος σε Promise (Reject)', async () => {
    const mockErrorCall = () => new Promise((_, reject) => setTimeout(() => reject(new Error('connection_failed')), 50));
    await expect(mockErrorCall()).rejects.toThrow('connection_failed');
  });

});
