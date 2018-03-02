import Ember from 'ember';
import swal from 'npm:sweetalert';

export default Ember.Component.extend({
  change(evt) {
    const cep = String(evt.target.value).replace(/\.|-|_/g, "");
    if (cep.length != 8) {
      swal('CEP Inválido!');
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => {
      return response.json();
    }).then(cep => {
      if (cep.erro) {
        return swal('CEP Inválido!').then(() => {
          this.set('address', null);
          this.set('city', null);
          this.set('state', null);
          this.set('neighborhood', null);
          this.$("input").focus();
          return;
        });
      }

      this.set('address', cep.logradouro);
      this.set('city', cep.localidade);
      this.set('state', cep.uf);
      this.set('neighborhood', cep.bairro);
    });
  }
});
