import Ember from 'ember';

export default Ember.Component.extend({
  googleMapsApi: Ember.inject.service(),
  google: Ember.computed.reads('googleMapsApi.google'),
  gMap: Ember.inject.service(),
  zoom: 14,
  markers: [],
  map: null,
  center: {
    lat: -26.2254235,
    lng: -52.6873143,
  },
  member: null,
  actions: {
    onLoad({
      map,
      publicAPI
    }) {
      this.set('map', map);
      if (this.get('model.leader.lat') && this.get('model.leader.lng') &&
        this.get('model.addressLeader')) {
        this.send('setMarker', {
          lat: Number(this.get('model.leader.lat')),
          lng: Number(this.get('model.leader.lng')),
          active: true
        });

        this.get('model.members').forEach(member => {
          if (member.get('id') != this.get('model.leader.id')) {
            this.send('setMarker', {
              lat: Number(member.get('lat')),
              lng: Number(member.get('lng'))
            });
          }
        })
      }
    },
    save() {
      this.get('model').save().then(data => {
        swal('Sucesso', 'Célula cadastrada com sucesso!', 'success');
        this.sendAction('transition');
      }).catch(err => {
        err = err.errors.lenght > 0 ? err.errors["0"].title : err;
        swal('Ops!', `Não foi possível salvar o registro\n${err}`, 'error');
      });
    },
    addMember(member) {
      this.get('model.members').pushObject(member);
      this.set('member', null);
    },
    removeMember(member) {
      swal({
        title: "Você deseja mesmo remover esse registro?",
        text: "Se prosseguir, não será possível reverter esse procedimento!",
        icon: "warning",
        buttons: ["Não, cancelar!", "Sim, Remover!"],
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          this.get('model.members').removeObject(member);
        }
      });
    },
    updateMap() {
      setTimeout(() => {
        google.maps.event.trigger(this.get('map'), "resize");
        this.get('map').panTo(this.center);
      }, 50);
    },
    setMarker({
      lat,
      lng,
      active
    }) {
      this.get('map').panTo({
        lat,
        lng
      });

      this.get('markers').pushObject({
        lat,
        lng,
        active
      });
    }
  }
});
