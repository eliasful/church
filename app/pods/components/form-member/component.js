import Ember from 'ember';
import swal from 'npm:sweetalert';

export default Ember.Component.extend({
  gMap: Ember.inject.service(),
  lat: -26.2254235,
  lng: -52.6873143,
  zoom: 14,
  markers: [],
  didInsertElement() {
    const markers = this.get('markers');
    markers.pushObject({
      lat: this.get('model.lat'),
      lng: this.get('model.lng'),
      animation: google.maps.Animation.DROP,
    });
  },
  actions: {
    add(evt) {
      const lat = evt.latLng.lat();
      const lng = evt.latLng.lng();

      const markers = this.get('markers');
      markers.pushObject({
        lat: lat,
        lng: lng,
        animation: google.maps.Animation.DROP,
        dblclick(event, marker) {
          markers.find(marker => {
            if (marker) {
              if (marker.lat == lat && marker.lng == lng) {
                markers.removeObject(marker);
              }
            }
          })
        }
      });
    },
    find() {
      const address = `${this.get('model.address')},${this.get('model.neighborhood')},${this.get('model.city')},${this.get('model.state')}`;
      this.get('gMap')
        .geocode({address})
        .then((geocodes) => {
          if (geocodes.length) {
            const lat = geocodes[0].geometry.location.lat();
            const lng = geocodes[0].geometry.location.lng();
            this.set('model.lat', lat);
            this.set('model.lng', lng);
          }
        }).catch((err) => swal('Ops!', 'Não foi possível buscar endereço', 'error'));
    },
    save() {
      this.get('model').save().then(data => {
        swal('Sucesso', 'Membro cadastrado com sucesso!', 'success');
        this.sendAction('transition');
      }).catch(err => {
        err = err.errors.lenght > 0 ? err.errors["0"].title : err;
        swal('Ops!', `Não foi possível salvar o registro\n${err}`, 'error');
      });
    }
  }
});
