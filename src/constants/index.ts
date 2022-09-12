/* NOTE: This is the place for all magic strings and numbers */

export const FAVORITES_STORAGE_KEY = '@favorites';

// FUTURE: Replace Firebase errors with our own?
//         see: https://firebase.google.com/docs/auth/errors
export enum FireBaseAuthError {
  Email = 'invalid-email',
  NotFound = 'user-not-found',
}
