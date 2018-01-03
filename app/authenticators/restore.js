import Ember from 'ember';
// app/authenticators/custom.js
import Base from 'ember-simple-auth/authenticators/base';

const {
  RSVP
} = Ember;

export default Base.extend({
  authenticate(data) {
    return RSVP.resolve(data);
  },
});
