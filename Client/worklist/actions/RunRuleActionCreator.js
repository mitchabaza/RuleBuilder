
var AppDispatcher = require('../dispatcher/AppDispatcher');
// Define action methods
var Actions = {
    fire: function () {

        AppDispatcher.dispatchRunRule();
    }
};
module.exports = Actions;