import {
  moduleForComponent, test
}
from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('vending-machine-display',
  'Integration | Component | vending machine display', {
    integration: true
  });

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs `{{vending-machine-display}}`);

  assert.equal(this.$().text().trim(), 'INSERT COIN');
});
