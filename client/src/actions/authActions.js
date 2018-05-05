import {TEST_DISPATCH} from './types';
//Register the User
export const registerUser = userData => {
  return {
    types: TEST_DISPATCH,
    payload: userData,
  };
};
