import Ember from 'ember';
import swal from 'npm:sweetalert';

export default Ember.Component.extend({
  googleMapsApi: Ember.inject.service(),
  google: Ember.computed.reads('googleMapsApi.google'),
  gMap: Ember.inject.service(),
  zoom: 14,
  markers: [],
  center: {
    lat: -26.2254235,
    lng: -52.6873143,
  },
  map: null,
  actions: {
    onLoad({ map, publicAPI }) {
      this.set('map', map);
      if (this.get('model.lat') && this.get('model.lng')) {
        this.set('center.lat', Number(this.get('model.lat')));
        this.set('center.lng',  Number(this.get('model.lng')));

        this.send('setMarker', this.center);
      }
    },
    add(evt) {
      this.set('center.lat', evt.event.latLng.lat());
      this.set('center.lng', evt.event.latLng.lng());

      this.set('model.lat', this.get('center.lat'));
      this.set('model.lng', this.get('center.lng'));

      this.send('setMarker', this.center);
    },
    find() {
      const address = `${this.get('model.address')},${this.get('model.neighborhood')},${this.get('model.city')},${this.get('model.state')}`;
      this.get('gMap')
        .geocode({address})
        .then((geocodes) => {
          if (geocodes.length) {
            this.set('model.lat', geocodes[0].geometry.location.lat());
            this.set('model.lng', geocodes[0].geometry.location.lng());

            this.set('center.lat', Number(this.get('model.lat')));
            this.set('center.lng',  Number(this.get('model.lng')));

            this.send('setMarker', this.center);
          }
        }).catch((err) => swal('Ops!', `Não foi possível buscar endereço\n${err}`, 'error'));
    },
    save() {
      if (this.get('model.birthday')) {
        this.set('model.birthday', moment(this.get('model.birthday'), 'DD/MM/YYYY').toDate());
      }

      if (this.get('model.ordination')) {
        this.set('model.ordination', moment(this.get('model.ordination'), 'DD/MM/YYYY').toDate());
      }

      if (this.get('model.baptism')) {
        this.set('model.baptism', moment(this.get('model.baptism'), 'DD/MM/YYYY').toDate());
      }
      
      if (this.get('model.married')) {
        this.set('model.married', moment(this.get('model.married'), 'DD/MM/YYYY').toDate());
      }

      this.get('model').save().then(data => {
        swal('Sucesso', 'Membro cadastrado com sucesso!', 'success');
        this.sendAction('transition');
      }).catch(err => {
        err = err.errors.lenght > 0 ? err.errors["0"].title : err;
        swal('Ops!', `Não foi possível salvar o registro\n${err}`, 'error');
      });
    },
    updateMap() {
      setTimeout(() => {
        google.maps.event.trigger(this.get('map'), "resize");
        this.send('setMarker', this.center);
      }, 50);
    },
    setMarker({ lat, lng }) {
      this.get('map').panTo({ lat, lng });

      this.set('markers', []);
      this.get('markers').pushObject({ lat, lng });
    }
  }
});
