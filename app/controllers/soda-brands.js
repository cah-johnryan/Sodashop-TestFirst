import Ember from 'ember';

export default Ember.Controller.extend({
  notify: Ember.inject.service('notify'),
  amountInserted: 0,
  actions: {
    generateNotification(notificationType, message, options) {
      if (!options) {
        options = {
          closeAfter: null
        };
      }
      let notify = this.get('notify');
      if (notificationType === 'error') {
        notify.error(message, options);
      } else if (notificationType === 'warning') {
        notify.warning(message, options);
      } else if (notificationType === 'success') {
        notify.success(message, options);
      }
    }
  }
});
