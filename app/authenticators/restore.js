import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

const { RSVP } = Ember;

export default Base.extend({
  authenticate(data) {
    return RSVP.resolve(data);
  },
});
