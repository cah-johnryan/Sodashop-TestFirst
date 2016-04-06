import Ember from 'ember';

export default Ember.Component.extend({
  costValidation: {
    'errorMessage': 'A cost is required with a value of zero or greater which can be broken down to nickles',
    'isError': (inputValue) => {
      var pattern = /^[0-9]\d*(\.\d+)?$/;
      return !canBeBrokenDownIntoNickels(inputValue) || !pattern.test(inputValue);

      function canBeBrokenDownIntoNickels(inputValue) {
        return parseInt(Number(inputValue) * 100) % 5 === 0;
      }
    }
  },
  quantityValidation: {
    'errorMessage': 'A quantity is required with a integer value of zero or greater',
    'isError': (inputValue) => {
      var pattern = /^[0-9]*$/;
      return !pattern.test(inputValue);
    }
  },
  actions: {
    cancelEditSoda() {
        this.get('returnToSodaListing')();
      },
      updateSoda() {
        let currentSoda = this.get('soda');
        let that = this;
        currentSoda.save().then(function() {
          that.get('returnToSodaListing')();
        });
      }
  }
});
