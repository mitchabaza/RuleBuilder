var fluxStoreBase = require('flux-store-base');

var AppDispatcher = require('../dispatcher/AppDispatcher.js');


var Store = fluxStoreBase.inject(AppDispatcher);
 //only
module.exports = Store;
