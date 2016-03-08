import Config from '../config/environment';
import Ember from 'ember';

export default Ember.Controller.extend({
  notify: Ember.inject.service('notify'),
  notificationCloseAfter: Config.notificationCloseAfter,

  amountInserted: 0,
  actions: {
    generateNotification(notificationType, message, options) {
      if (!options) {
        options = {
          closeAfter: this.get('notificationCloseAfter')
        };
      }
      let notify = this.get('notify');
      if (notificationType === 'error') {
        notify.error(message, options);
      } else if (notificationType === 'warning') {
        notify.warning(message, options);
      } else if (notificationType === 'success') {
        notify.success(message, options);
      } else if (notificationType === 'raw') {
        notify.success(window.$.extend(options, {
          html: message
        }));
      }
    }
  }
});
