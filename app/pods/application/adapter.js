import DS from 'ember-data';
import environment from 'church/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:token',
  coalesceFindRequests: true,
  host: environment.apiBaseUrl,
  // defaultSerializer: '-rest'
});
