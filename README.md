# Sodashop-VendingMachine

This repo is was originally based on the below blog. https://www.twilio.com/blog/2015/09/using-ember-data-with-firebase.html

I've moved this further into a kata that Guy Royse introduced me to.
https://github.com/guyroyse/vending-machine-kata

TODO
------------
- If there is not enough money inserted then the machine displays PRICE and the price of the item and subsequent checks of the display will display either INSERT COINS or the current amount as appropriate.  Show this through the display, not the dispenser.
- Need to secure the edit screen for sodas, it stays accessible after logging out.

Kata objectives
====================

In this exercise you will build a soda vending machine.  It will accept money, make change, maintain inventory, and dispense products.  All the things that you might expect a soda vending
machine to accomplish.

The point of this kata to to provide an larger than trivial exercise that can be used to practice TDD.  A significant portion of the effort will be in determining what tests should be
written and, more importantly, written next.

Features
========

Accept Coins
------------

_As a vendor_  
_I want a soda vending machine that accepts coins_  
_So that I can collect money from the customer_  

The soda vending machine will accept valid coins (nickels, dimes, and quarters) and reject invalid ones (pennies).  When a valid coin is inserted the amount of the coin will be added to the current amount and the display will be updated.  When there are no coins inserted, the machine displays INSERT COIN.  Rejected coins are placed in the coin return.

NOTE: The temptation here will be to create Coin objects that know their value.  However, this is not how a real vending machine works.  Instead, it identifies coins by their weight and size and then assigned a value to what was inserted.  You will need to do something similar.  This can be simulated using strings, constants, enums, symbols, or something of that nature.

Select Product
--------------

_As a vendor_  
_I want customers to select sodas_
_So that I can give them an incentive to put money in the machine_  

There are an assortment of sodas.  When the respective button is pressed and enough money has been inserted, the soda is dispensed and the machine displays THANK YOU.  If the display is checked again, it will display INSERT COINS and the current amount will be set to $0.00.  If there is not enough money inserted then the machine displays PRICE and the price of the soda and subsequent checks of the display will display either INSERT COINS or the current amount as appropriate.


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd my-app`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
