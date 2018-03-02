import Ember from 'ember';

export function concatenate(params /*, hash*/ ) {
  let concatenated = '';
  for (let i = 0; i < params.length; i++) {
    if (params[i]) {
      concatenated += params[i];
    }
  }
  return concatenated;
}

export default Ember.Helper.helper(concatenate);
