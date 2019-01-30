import {module, test} from 'qunit';
import {setupApplicationTest} from 'ember-qunit';
import {click, visit} from '@ember/test-helpers';
import $ from 'jquery';

module('Acceptance | soda listing admin', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(async function () {
    await visit('/1/sodas');
    if (($('#login').length !== 0)) {
      click('#login');
    }
  });

  test('the create soda icon is present', async function (assert) {
    await visit('/1/sodas');
    assert.ok($('#createSodaLink').is(":visible"),
      'the icon is present');
  });

  test('visiting the soda listing for "Lesters Fixins"', async function (assert) {
    await visit('/1/sodas');
    assert.equal($('md-list-item').length, 8,
      "exactly eight items are displayed");

    assert.equal($('md-list-item:nth-child(1) h3').text(),
      'Bacon Soda with Chocolate',
      "it displays Bacon Soda with Chocolate");
    assert.equal($('md-list-item:nth-child(1) h4').text(),
      '$0.50',
      "it displays the right price for Bacon Soda with Chocolate"
    );

    assert.equal($('md-list-item:nth-child(2) h3').text(),
      'Buffalo Wing Soda',
      "it displays Buffalo Wing Soda");
    assert.equal($('md-list-item:nth-child(2) h4').text(),
      '$0.50',
      "it displays the right price for Buffalo Wing Soda"
    );

    assert.equal($('md-list-item:nth-child(3) h3').text(),
      'Coffee Soda',
      "it displays Coffee Soda");
    assert.equal($('md-list-item:nth-child(3) h4').text(),
      '$1.50',
      "it displays the right price for Coffee Soda"
    );

    assert.equal($('md-list-item:nth-child(4) h3').text(),
      'Peanut Butter & Jelly Soda',
      "it displays Peanut Butter & Jelly Soda");
    assert.equal($('md-list-item:nth-child(4) h4').text(),
      '$0.50',
      "it displays the right price for Peanut Butter & Jelly Soda"
    );

    assert.equal($('md-list-item:nth-child(5) h3').text(),
      'Sweet Corn Soda',
      "it displays Sweet Corn Soda");
    assert.equal($('md-list-item:nth-child(5) h4').text(),
      '$0.50',
      "it displays the right price for Sweet Corn Soda"
    );

    assert.equal($('md-list-item:nth-child(6) h3').text(),
      'Ranch Dressing Soda',
      "it displays Ranch Dressing Soda");
    assert.equal($('md-list-item:nth-child(6) h4').text(),
      '$0.50',
      "it displays the right price and quantity for Ranch Dressing Soda"
    );

    assert.equal($('md-list-item:nth-child(7) h3').text(),
      'Pumpkin Pie Soda',
      "it displays Pumpkin Pie Soda");
    assert.equal($('md-list-item:nth-child(7) h4').text(),
      'SOLD OUT',
      "it displays the right price for Pumpkin Pie Soda"
    );

    assert.equal($('md-list-item:nth-child(8) h3').text(), 'Bacon Soda',
      "it displays Bacon Soda");
    assert.equal($('md-list-item:nth-child(8) h4').text(),
      '$0.50',
      "it displays the right price for Bacon Soda"
    );
  });
});
