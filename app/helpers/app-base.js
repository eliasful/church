import Ember from 'ember';
import environment from 'church/config/environment';

export function appBase(params/*, hash*/) {
  return environment.appUrl;
}

export default Ember.Helper.helper(appBase);
