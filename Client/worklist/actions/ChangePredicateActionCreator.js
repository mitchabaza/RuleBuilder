var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/RuleActionConstants');
var uuid = require("uuid");
// Define action methods
var Actions = {
    fire: function (rule) {
        
        AppDispatcher.dispatchChangePredicate(rule);
    }
};
module.exports = Actions;