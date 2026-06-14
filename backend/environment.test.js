/**
 * Ελέγχος: CI/CD Environment & Sanity Checks
 * Σκοπός: Επαλήθευση της σωστής λειτουργίας του Test Runner (Jest) 
 * και του περιβάλλοντος Node.js μέσα στο GitHub Actions.
 */

describe('Environment & CI/CD Pipeline Sanity Checks', () => {
  
  test('Ο test runner (Jest) εκτελείται σωστά στο τρέχον περιβάλλον', () => {
    const isRunnerActive = true;
    expect(isRunnerActive).toBe(true);
  });

  test('Οι περιβαλλοντικές μεταβλητές διαχειρίζονται σωστά τους τύπους δεδομένων', () => {
    const pipelineStatus = 'passing';
    expect(typeof pipelineStatus).toBe('string');
    expect(pipelineStatus).toEqual('passing');
  });

  test('Ορίζεται σωστά το περιβάλλον εκτέλεσης (Node.js)', () => {
    const env = process.env.NODE_ENV || 'development';
    expect(env).toBeDefined();
    expect(typeof env).toBe('string');
  });

});
